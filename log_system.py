import json
import time
import random
import os
from datetime import datetime

# Configuration
LOG_DIR = "machine_logs"
STATUS_FILE = "live_status.json"
THRESHOLDS = {
    "Litho_ASML_01": {"dose": (18.5, 21.5), "focus": (-10, 10)},
    "Etch_Lam_04": {"pressure": (5, 15), "rf_power": (450, 550)},
    "Dep_AMAT_02": {"temp": (380, 420), "flow": (90, 110)}
}

if not os.path.exists(LOG_DIR):
    os.makedirs(LOG_DIR)

def generate_mock_log():
    """Simulates a machine writing a log file."""
    machine = random.choice(list(THRESHOLDS.keys()))
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"{LOG_DIR}/{machine}_{timestamp}.log"
    
    # Generate data (sometimes trigger an excursion)
    data = {}
    limits = THRESHOLDS[machine]
    for param, (low, high) in limits.items():
        # 10% chance of a 'failure'
        if random.random() > 0.9:
            data[param] = round(random.uniform(high, high * 1.5), 2)
        else:
            data[param] = round(random.uniform(low, high), 2)
    
    with open(filename, "w") as f:
        f.write(f"MACHINE: {machine}\n")
        f.write(f"TIMESTAMP: {timestamp}\n")
        f.write(f"DATA: {json.dumps(data)}\n")
    
    return filename, machine, data

def parse_and_monitor(file_path, machine, data):
    """Parses the log and checks against thresholds."""
    alerts = []
    limits = THRESHOLDS[machine]
    
    for param, value in data.items():
        low, high = limits[param]
        if value < low or value > high:
            alerts.append(f"CRITICAL: {param} is {value} (Limit: {low}-{high})")
    
    status = "FAIL" if alerts else "PASS"
    return {
        "machine": machine,
        "timestamp": datetime.now().strftime("%H:%M:%S"),
        "status": status,
        "data": data,
        "alerts": alerts
    }

def main():
    print(f"Monitoring {LOG_DIR}... Press Ctrl+C to stop.")
    history = []
    
    try:
        while True:
            # 1. Simulate a machine finishing a run
            file_path, machine, data = generate_mock_log()
            
            # 2. Parse and Analyze
            result = parse_and_monitor(file_path, machine, data)
            
            # 3. Update History (keep last 10)
            history.insert(0, result)
            history = history[:10]
            
            # 4. Save to JSON for the Web App
            with open(STATUS_FILE, "w") as f:
                json.dump(history, f, indent=2)
            
            print(f"[{result['timestamp']}] {machine}: {result['status']}")
            if result['alerts']:
                print(f"  !!! ALERT: {result['alerts']}")
                
            time.sleep(3) # Wait 3 seconds before next log
            
    except KeyboardInterrupt:
        print("\nStopping monitor...")

if __name__ == "__main__":
    main()
