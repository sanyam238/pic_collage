var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}
Recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
document.getElementById("textbox").innerHTML = content;
console.log(content);

if(content == "take my selfie"){
    console.log("Taking your selfie...");
    speak();
}
}

 function speak(){
var synth = window.speechSynthesis;
speech_data = "Taking your selfie in 5 seconds ... ";
var utter_this = new SpeechSynthesisUtterance(speech_data);
synth.speak(utter_this); 
setTimeout(function(){
    take_snapshot();
},5000);
Webcam.attach(camera);
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot(){
Webcam.snap(function (data_uri){
    document.getElementById("result").innerHTML = '<img id="selfie_image" src = "'+data_uri+'"/>';
});
save()
}



function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}