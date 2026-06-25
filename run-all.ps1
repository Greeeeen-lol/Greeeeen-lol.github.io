<#
  run-all.ps1 - launch every tom9o local server, each in its own window.

  Ports:
    8080  server          (fighting-game backend)      npm start
    8082  platform-server  (assets + eShop payloads)    npm start
    8081  .  (mii-creator frontend, vite)               npm run dev

  ngrok:
    Exposes platform-server (8082) at the reserved domain so a hosted frontend
    (GitHub Pages) can reach the eShop backend. This is the port PLATFORM_BASE
    (public/platform-config.js) points at — NOT 8080.

  Usage:
    powershell -ExecutionPolicy Bypass -File .\run-all.ps1
    .\run-all.ps1 -Install      # npm install in each project first
    .\run-all.ps1 -NoNgrok      # skip the ngrok tunnel
#>
param(
  [switch]$Install,
  [switch]$NoNgrok
)

$root = $PSScriptRoot

# ngrok: public tunnel to the platform server (eShop backend) on 8082.
$NgrokDomain = 'basically-immense-rat.ngrok-free.app'
$NgrokPort   = 8082

# name, relative dir, npm script, port
$targets = @(
  @{ Name = 'server (8080)';          Dir = 'server';          Cmd = 'start'; Port = 8080 },
  @{ Name = 'platform-server (8082)'; Dir = 'platform-server'; Cmd = 'start'; Port = 8082 },
  @{ Name = 'mii-creator (8081)';     Dir = '.';               Cmd = 'dev';   Port = 8081 }
)

foreach ($t in $targets) {
  $dir = Join-Path $root $t.Dir
  if (-not (Test-Path (Join-Path $dir 'package.json'))) {
    Write-Warning "skip $($t.Name): no package.json in $dir"
    continue
  }
  if ($Install -and -not (Test-Path (Join-Path $dir 'node_modules'))) {
    Write-Host "npm install -> $($t.Name)" -ForegroundColor Cyan
    Push-Location $dir; npm install; Pop-Location
  }

  $title = "tom9o :: $($t.Name)"
  $inner = "`$host.UI.RawUI.WindowTitle='$title'; Set-Location '$dir'; npm run $($t.Cmd)"
  Start-Process powershell -ArgumentList '-NoExit', '-Command', $inner
  Write-Host "started $($t.Name)  ->  http://localhost:$($t.Port)" -ForegroundColor Green
}

# ngrok tunnel for the platform server (reserved domain -> 8082).
if (-not $NoNgrok) {
  $ngrok = (Get-Command ngrok -ErrorAction SilentlyContinue)
  if ($ngrok) {
    $title = "tom9o :: ngrok ($NgrokDomain -> $NgrokPort)"
    $inner = "`$host.UI.RawUI.WindowTitle='$title'; ngrok http --domain=$NgrokDomain $NgrokPort"
    Start-Process powershell -ArgumentList '-NoExit', '-Command', $inner
    Write-Host "started ngrok  ->  https://$NgrokDomain  (=> localhost:$NgrokPort)" -ForegroundColor Green
  } else {
    Write-Warning "ngrok not found on PATH; skipping tunnel. Install ngrok or run with -NoNgrok."
  }
}

Write-Host ""
Write-Host "All servers launched in separate windows. Close a window to stop that server." -ForegroundColor Yellow
Write-Host "Frontend (local):  http://localhost:8081  (mii-creator)"
Write-Host "Backend (public):  https://$NgrokDomain  (platform-server 8082)"
