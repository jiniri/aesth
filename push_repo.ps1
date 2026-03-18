Set-Location -Path 'D:\Download\2026\lumiere-aesthetics'

if (!(Test-Path .git)) {
  git init
  git add -A
  git commit -m "Initial commit"
  if ($LASTEXITCODE -ne 0) {
    git config user.email "devnull@example.com"
    git config user.name "lumiere-auto"
    git commit -m "Initial commit"
  }
}

# Remove any existing origin then add the requested remote
git remote remove origin 2>$null
git remote add origin https://github.com/jiniri/aesth.git

# Ensure main branch and push
git branch -M main
git push -u origin main
