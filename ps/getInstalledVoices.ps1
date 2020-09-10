Add-Type -AssemblyName System.Speech;

$speechSynthesizer = [System.Speech.Synthesis.SpeechSynthesizer]::new();
$speechSynthesizer.GetInstalledVoices() | ForEach-Object -Process {[Console]::WriteLine($_.VoiceInfo.Name);}