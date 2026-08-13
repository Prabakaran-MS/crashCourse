# Simple static file server for the Learning Page.
# Usage:  powershell -ExecutionPolicy Bypass -File serve.ps1
# Then open the URL it prints in your browser.

param(
	[int]$Port = 8000,
	[string]$Root = $PSScriptRoot,
	[switch]$NoBrowser
)

$prefix = "http://localhost:$Port/"
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add($prefix)

try {
	$listener.Start()
} catch {
	Write-Host "Could not start server on $prefix - $($_.Exception.Message)" -ForegroundColor Red
	exit 1
}

$mime = @{
	".html" = "text/html";        ".htm"  = "text/html"
	".css"  = "text/css";         ".js"   = "text/javascript"
	".json" = "application/json";  ".md"   = "text/markdown"
	".svg"  = "image/svg+xml";     ".png"  = "image/png"
	".jpg"  = "image/jpeg";        ".jpeg" = "image/jpeg"
	".gif"  = "image/gif";         ".ico"  = "image/x-icon"
	".woff" = "font/woff";         ".woff2"= "font/woff2"
}

Write-Host "Serving '$Root'" -ForegroundColor Green
Write-Host "Open: ${prefix}Learning-Page/" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop." -ForegroundColor DarkGray

if (-not $NoBrowser) {
    Start-Process "${prefix}Learning-Page/"
}

while ($listener.IsListening) {
	try {
		$context  = $listener.GetContext()
		$request  = $context.Request
		$response = $context.Response

		$relative = [Uri]::UnescapeDataString($request.Url.AbsolutePath.TrimStart('/'))
		if ([string]::IsNullOrWhiteSpace($relative)) { $relative = "index.html" }

		$fullPath = Join-Path $Root $relative
		if (Test-Path $fullPath -PathType Container) {
			$fullPath = Join-Path $fullPath "index.html"
		}

		if (Test-Path $fullPath -PathType Leaf) {
			$ext = [System.IO.Path]::GetExtension($fullPath).ToLower()
			$response.ContentType = if ($mime.ContainsKey($ext)) { $mime[$ext] } else { "application/octet-stream" }
			$bytes = [System.IO.File]::ReadAllBytes($fullPath)
			$response.ContentLength64 = $bytes.Length
			$response.OutputStream.Write($bytes, 0, $bytes.Length)
		} else {
			$response.StatusCode = 404
			$msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $relative")
			$response.OutputStream.Write($msg, 0, $msg.Length)
		}
		$response.OutputStream.Close()
	} catch {
		# Ignore transient client disconnects and keep serving.
	}
}
