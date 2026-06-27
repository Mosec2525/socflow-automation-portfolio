@echo off
echo Starting SOCFlow Automation Website...
echo.
echo Step 1: Installing dependencies
npm install
if %ERRORLEVEL% NEQ 0 (
  echo.
  echo npm install failed. Make sure Node.js is installed from https://nodejs.org/
  pause
  exit /b %ERRORLEVEL%
)

echo.
echo Step 2: Running local development server
echo Open http://localhost:3000 in your browser
echo.
npm run dev
pause
