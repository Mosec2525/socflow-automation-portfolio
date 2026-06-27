Write-Host "Starting SOCFlow Automation Website..." -ForegroundColor Cyan
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
  Write-Host "npm install failed. Make sure Node.js is installed from https://nodejs.org/" -ForegroundColor Red
  exit $LASTEXITCODE
}
Write-Host "Running local development server..." -ForegroundColor Green
Write-Host "Open http://localhost:3000 in your browser" -ForegroundColor Cyan
npm run dev
