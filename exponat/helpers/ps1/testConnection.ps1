$r = Invoke-WebRequest https://typewriter.meen.ch

Write-Host "Status: $($r.StatusCode)"
$r.Headers

