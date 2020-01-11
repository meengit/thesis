$r = Invoke-WebRequest https://typewriter.meen.ch/reset

Write-Host "`nStatus: $($r.StatusCode)"
Write-Host "`n"
$r.Headers

