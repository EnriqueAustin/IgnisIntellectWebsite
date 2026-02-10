import subprocess
import os
import shutil

PROJECT_NAME = "web"

def run_command(command, cwd=None):
    print(f"Executing: {command}")
    subprocess.run(command, shell=True, check=True, cwd=cwd)

def main():
    if os.path.exists(PROJECT_NAME):
        print(f"⚠️ Directory '{PROJECT_NAME}' already exists. Skipping creation.")
        return

    print("🚀 Scaffolding Next.js Project (Ignis Intellect)...")

    # 1. Create Next.js App (Non-interactive)
    # Using specific flags to match requirements: TS, Tailwind, ESLint, App Router, No Src Dir, Import Alias @
    cmd = (
        f"npx create-next-app@latest {PROJECT_NAME} "
        "--typescript "
        "--tailwind "
        "--eslint "
        "--app "
        "--no-src-dir "
        "--import-alias '@/*' "
        "--use-npm " # Force npm usage
    )
    # Note: create-next-app might prompt for missing args if changed in newer versions, 
    # but these flags cover the standard prompts. 
    # To run completely non-interactive we can accept defaults for any new prompts via 'yes' or similar if needed,
    # but provided flags cover strict mode.
    # Added --yes to npx to auto-install create-next-app if missing.
    run_command(f"npx --yes {cmd}")

    # 2. Install Additional Dependencies
    print("📦 Installing UI Libraries...")
    deps = "lucide-react framer-motion clsx tailwind-merge aos"
    run_command(f"npm install {deps}", cwd=PROJECT_NAME)
    
    # 3. Create Architecture Directories
    print("📂 Creating Directory Structure...")
    dirs = [
        "components/ui",
        "components/sections",
        "components/layout",
        "lib",
        "data"
    ]
    for d in dirs:
        os.makedirs(os.path.join(PROJECT_NAME, d), exist_ok=True)

    # 4. Clean Default Files (Optional - can be done in next step via code edits)
    # We will overwrite page.tsx and globals.css later based on SOP.

    print("✅ Project Scaffolding Complete!")
    print(f"cd {PROJECT_NAME} && npm run dev")

if __name__ == "__main__":
    try:
        main()
    except subprocess.CalledProcessError as e:
        print(f"❌ Error during scaffolding: {e}")
        exit(1)
