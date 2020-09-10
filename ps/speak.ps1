Add-Type -AssemblyName System.Speech;
Add-Type -AssemblyName System.Runtime.Extensions;

# text, rate, volume, voice

[Console]::InputEncoding = [System.Text.Encoding]::UTF8;
$speechSynthesizer = [System.Speech.Synthesis.SpeechSynthesizer]::new();
$speechSynthesizer.Rate = $rate;
$speechSynthesizer.Volume = $volume;
If($voice) {$speechSynthesizer.SelectVoice($voice)};

$memoryStream = [System.IO.MemoryStream]::new();
$speechSynthesizer.SetOutputToWaveStream($memoryStream);

$speechSynthesizer.Speak($text);

$buffer = $memoryStream.GetBuffer();

$encoded = [System.Convert]::ToBase64String($buffer);
[console]::WriteLine($encoded);