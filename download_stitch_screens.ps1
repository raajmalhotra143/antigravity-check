$projectId = "17813014804840449538"

# Create directories for assets and screens
$assetsDir = Join-Path -Path (Get-Location) -ChildPath "stitch_assets"
$screensDir = Join-Path -Path (Get-Location) -ChildPath "stitch_screens"
New-Item -ItemType Directory -Path $assetsDir -Force | Out-Null
New-Item -ItemType Directory -Path $screensDir -Force | Out-Null

# Asset mappings (Design System ZIPs)
$assets = @{
    "design_system_1.zip" = "asset-stub-assets-7d2718b153b346648360ecc27e4df5c2-1775498381024"
    "design_system_2.zip" = "asset-stub-assets-b4446bd8340d4821bc8d8648338c7024-1775498375904"
    "design_system_3.zip" = "asset-stub-assets-d76e908e3f5344c48777b6af063786d1-1775498404613"
}

# Screen mappings (HTML files)
$screens = @{
    "login_page.html"        = "8fad7b3635aa494abb5c3ee24fd384a4"
    "explore_page.html"      = "50e190db5d6e4d0c81e030c65bc5d114"
    "home_feed.html"         = "c93b5120984f49e78609e585f2ba8acf"
    "messages.html"          = "65fc58b912674949aab36827be34d8e2"
    "notifications.html"     = "459b2acdc34b46cfb8c015ab321bb563"
    "create_post_modal.html" = "06fa984ea3254de8a02f472a655aeb42"
    "post_detail_modal.html" = "3a6ebe4ae28a4d1c841d2c3e70ab59c9"
    "signup_page.html"       = "841f04e173a54cfeb90a6969785af1ef"
    "settings.html"          = "845d483e3576468ca69be85911163883"
    "edit_profile.html"      = "a13261709ea14c9f9c49d7a2b8b9c93"
    "user_profile.html"      = "f92bff2e60e24666adc9dc8db1f12877"
    "reels_viewing.html"     = "9d93440c89264212875c915579d550bc"
    "home_feed_dashboard.html" = "9ba3beed0a6941a48730f172599df423"
}

# Helper function to download using curl.exe (ensures -L works)
function Download-WithCurl {
    param(
        [string]$Url,
        [string]$OutPath
    )
    $curlPath = "curl.exe"  # assumes curl.exe is in PATH (Windows 10+ includes it)
    & $curlPath -L -o $OutPath $Url
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Failed to download $Url" -ForegroundColor Red
    } else {
        Write-Host "Downloaded $OutPath" -ForegroundColor Green
    }
}

# Download assets
foreach ($kvp in $assets.GetEnumerator()) {
    $fileName = $kvp.Key
    $assetId  = $kvp.Value
    $url = "https://stitch.googleapis.com/v1/assets/$assetId?alt=media"
    $outPath = Join-Path $assetsDir $fileName
    Download-WithCurl -Url $url -OutPath $outPath
}

# Download screen code
foreach ($kvp in $screens.GetEnumerator()) {
    $fileName = $kvp.Key
    $screenId = $kvp.Value
    $url = "https://stitch.googleapis.com/v1/projects/$projectId/screens/$screenId/code?alt=media"
    $outPath = Join-Path $screensDir $fileName
    Download-WithCurl -Url $url -OutPath $outPath
}

Write-Host "All downloads completed." -ForegroundColor Cyan
