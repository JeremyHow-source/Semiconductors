import sys
import re

def query_agent(keyword, mapping_file):
    try:
        with open(mapping_file, 'r') as f:
            content = f.read()
    except FileNotFoundError:
        return f"Error: Mapping file {mapping_file} not found."

    # Split into sections by header
    sections = re.split(r'\n## ', content)
    
    results = []
    for section in sections:
        if keyword.lower() in section.lower():
            # Re-add header marker if it was split
            if not section.startswith('#'):
                section = '## ' + section
            results.append(section.strip())

    if not results:
        return f"No information found for '{keyword}'."
    
    return "\n\n---\n\n".join(results)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python semi_agent.py <role_or_tool_keyword>")
        sys.exit(1)
    
    keyword = " ".join(sys.argv[1:])
    mapping_path = r"C:\Users\SINGAPORE\Desktop\Reading section\Semiconductors\semiconductor_role_tools_mapping.md"
    print(query_agent(keyword, mapping_path))
