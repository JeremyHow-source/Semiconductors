// The "Brain" of the application: A structured Knowledge Graph
const knowledgeBase = {
    "roles": {
        "lithography": {
            "title": "Lithography Process Engineer",
            "area": "Patterning",
            "description": "Responsible for transferring geometric shapes on a mask to the surface of a silicon wafer.",
            "tools": ["ASML Scanner (DUV/EUV)", "TEL Clean Track", "CD-SEM", "Overlay Metrology"],
            "upstream": "Deposition",
            "downstream": "Etch",
            "common_defects": ["CD Variation", "Overlay Shift", "Pattern Collapse", "Scumming"],
            "key_params": ["Dose", "Focus", "NA (Numerical Aperture)"]
        },
        "etch": {
            "title": "Etch Process Engineer",
            "area": "Pattern Removal",
            "description": "Selectively removes material from the wafer to create the circuit patterns defined by lithography.",
            "tools": ["Lam Research RIE", "Applied Materials Centris", "Ashers", "Wet Bench"],
            "upstream": "Lithography",
            "downstream": "Cleaning / Deposition",
            "common_defects": ["Under-etch", "RIE Lag", "Notching", "Trenching", "Polymer Buildup"],
            "key_params": ["Bias Power", "Gas Flow", "Pressure"]
        },
        "deposition": {
            "title": "Thin Films / Deposition Engineer",
            "area": "Material Addition",
            "description": "Deposits dielectric and metal layers to form the vertical structure of the chip.",
            "tools": ["Applied Materials Endura (PVD)", "Lam Research Vector (PECVD)", "ASM Pulsar (ALD)"],
            "upstream": "Cleaning",
            "downstream": "Lithography / CMP",
            "common_defects": ["Voiding", "Poor Step Coverage", "Film Stress", "Particle Contamination"],
            "key_params": ["Temperature", "Plasma Power", "Precursor Flow"]
        },
        "metrology": {
            "title": "Metrology Engineer",
            "area": "Measurement",
            "description": "The 'eyes' of the fab. Measures physical and electrical properties to ensure process control.",
            "tools": ["KLA Tencor (SpectraFilm)", "Hitachi CD-SEM", "AFM", "Ellipsometer"],
            "upstream": "All Modules",
            "downstream": "APC (Advanced Process Control)",
            "common_defects": ["Measurement Noise", "Model Uncertainty", "Sample Charging"],
            "key_params": ["Precision", "Accuracy", "Matching"]
        },
        "yield": {
            "title": "Yield & Defect Engineer",
            "area": "Integration & Analysis",
            "description": "Hunts down the root cause of die loss. Connects electrical failure to physical defects.",
            "tools": ["KLA Inspector", "Defect Review SEM", "YMS (Yield Management Software)", "Inline Defect Review"],
            "upstream": "All Modules",
            "downstream": "FA (Failure Analysis)",
            "common_defects": ["Killer Defects", "Nuisance Defects", "Excursions"],
            "key_params": ["Kill Ratio", "Defect Density", "Yield Prediction"]
        }
    },
    "troubleshooting_tree": {
        "start": {
            "question": "What type of issue are you facing?",
            "options": [
                { "label": "Physical Defect (Visual)", "next": "visual_defect" },
                { "label": "Electrical / Parametric Failure", "next": "electrical_fail" },
                { "label": "Process Stability / Tool Down", "next": "tool_issue" }
            ]
        },
        "visual_defect": {
            "question": "Describe the visual defect appearance:",
            "options": [
                { "label": "Circular / Blob (Particle)", "next": "particle_analysis" },
                { "label": "Line Distortion / Bridging", "next": "pattern_issue" },
                { "label": "Scratch / CMP Chatter", "next": "cmp_issue" }
            ]
        },
        "particle_analysis": {
            "question": "Is the particle embedded or on top?",
            "options": [
                { "label": "On Top (Surface)", "solution": "Likely 'Fall-on' particle. Check handling robots, loadports, or ambient cleanroom air. Action: Run a Wet Clean cycle and re-scan." },
                { "label": "Embedded (Under Film)", "solution": "Process generated. Check previous Deposition or PVD chamber walls for flaking. Action: EDX analysis to identify composition." }
            ]
        },
        "pattern_issue": {
            "question": "Is the pattern too wide (Short) or too narrow (Open)?",
            "options": [
                { "label": "Too Wide (Bridging)", "solution": "Under-etch or Litho Over-exposure. Check Litho Focus/Dose first. If Litho is good, check Etch time and chemistry." },
                { "label": "Too Narrow (Broken Lines)", "solution": "Over-etch or Litho Under-exposure. Could also be pattern collapse due to high aspect ratio. Check rinse dry steps." }
            ]
        },
        "electrical_fail": {
            "question": "What is the failure signature?",
            "options": [
                { "label": "High Resistance / Open", "next": "open_circuit" },
                { "label": "Leakage / Short", "next": "short_circuit" }
            ]
        },
        "open_circuit": {
            "question": "Where is the open likely located?",
            "options": [
                { "label": "Via / Contact", "solution": "Likely 'Via Bottom' residue. The etch didn't punch through, or the barrier metal is missing. Action: Check Etch endpoint traces." },
                { "label": "Metal Line", "solution": "Electromigration or Stress Voiding. Check Deposition temperature and annealing steps." }
            ]
        },
        "short_circuit": {
            "question": "Is it random or systematic?",
            "options": [
                { "label": "Random", "solution": "Likely particle defects bridging lines. Refer to Defect density maps." },
                { "label": "Systematic (Same location on every die)", "solution": "Reticle (Mask) Defect! The mask itself might be dirty or damaged. Action: Inspect the Reticle immediately." }
            ]
        },
        "tool_issue": {
            "question": "Which toolset is alarming?",
            "options": [
                { "label": "Etch Chamber", "solution": "Check OES (Optical Emission) traces. If endpoint is early/late, check gas flow controllers (MFCs) or RF matching network." },
                { "label": "Litho Track", "solution": "Check dispense nozzles for clogging. If coating uniformity is bad, check exhaust flow and spin speed." }
            ]
        },
        "cmp_issue": {
            "question": "Describe the scratch pattern:",
            "options": [
                { "label": "Arc / Curved Scratches", "solution": "Pad conditioning issue or large slurry agglomerates. Check filter and diamond conditioner disk." },
                { "label": "Chatter Marks", "solution": "Vibration in the carrier head or pad glazing. Check retainment ring pressure." }
            ]
        }
    }
};
