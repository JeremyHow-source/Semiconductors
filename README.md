# Semiconductor Job-Tool Workflow Agent

This agent helps you identify tools and process areas associated with specific job roles in the semiconductor industry, based on knowledge extracted from industry handbooks and interview guides.

## How to use:

### 1. Simple Keyword Search
Run the `semi_agent.py` script with a job role or tool name as an argument:

```bash
python semi_agent.py "Etch"
python semi_agent.py "Yield"
python semi_agent.py "CD-SEM"
```

### 2. Supported Roles:
- Lithography Process Engineer
- Etch Process Engineer
- Deposition (Thin Films) Engineer
- Metrology Engineer
- Yield & Defect Engineer
- Process Integration Engineer (PIE)
- Wet Process / Cleaning Engineer
- Failure Analysis (FA) Engineer

### 3. Detailed Information:
The agent will return:
- **Process Area:** The specific domain the role covers.
- **Core Tools:** The primary equipment used.
- **Monitoring Tools:** Devices used for measurement and control.
- **Key Concepts:** Fundamental principles relevant to the role.

## Data Source:
The knowledge base is stored in `semiconductor_role_tools_mapping.md`, which is distilled from the PDF documents in this directory.
