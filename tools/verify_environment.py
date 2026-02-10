import subprocess
import sys
import os

def run_command(command):
    try:
        result = subprocess.run(
            command, 
            capture_output=True, 
            text=True, 
            shell=True,
            check=True
        )
        return result.stdout.strip()
    except subprocess.CalledProcessError as e:
        return None

def main():
    print("🔍 Verifying Environment...")
    
    # 1. Check Node.js
    node_version = run_command("node --version")
    if node_version:
        print(f"✅ Node.js found: {node_version}")
    else:
        print("❌ Node.js NOT found. Please install Node.js (v18+ recommended).")
        sys.exit(1)

    # 2. Check NPM
    npm_version = run_command("npm --version")
    if npm_version:
        print(f"✅ NPM found: {npm_version}")
    else:
        print("❌ NPM NOT found.")
        sys.exit(1)

    # 3. Check Directory Permissions
    cwd = os.getcwd()
    if os.access(cwd, os.W_OK):
        print(f"✅ Write access confirmed for: {cwd}")
    else:
        print(f"❌ No write access for: {cwd}")
        sys.exit(1)

    print("\n🎉 Environment is ready for B.L.A.S.T. execution.")

if __name__ == "__main__":
    main()
