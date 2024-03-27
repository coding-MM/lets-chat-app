var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function  start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event)

var Content = event.results[0][0].transcript
document.getElementById("textbox").innerHTML= Content;
console.log(Content);
if(Content =="take my selfie")
{
    console.log("taking selfie")
    speak();
}


}
function speak(){
    var synth = window.speachSynthesis;

    speak_data = "Taking your selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
Webcam.attach(camera);

setTimeout(function()
{
    take_snapshot();
    SVGAElement();
},5000);
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camara =  document.getElementById("camara")

function take_snapshot()
{
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="selfie_image".src="'+data_uri+'">'
});

}