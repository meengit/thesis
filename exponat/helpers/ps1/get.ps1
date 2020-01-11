$r = Invoke-WebRequest https://typewriter.meen.ch/text.txt

Write-Host "`nStatus: $($r.StatusCode)"
Write-Host "`nBody (if available):`n$($r.Content)"
Write-Host "`n"
$r.Headers

