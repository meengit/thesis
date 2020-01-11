Param (
  [String]$p="---"
)

$d = $p
$r = Invoke-WebRequest https://typewriter.meen.ch/post -Method 'POST' -Headers @{'Content-Type' = 'text/plain'} -Body $d

Write-Host "`nStatus: $($r.StatusCode)"
Write-Host "`nBody (if available):`n$($r.Content)"
Write-Host "`n"
$r.Headers

