Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src="+data_uri+"/>"
    })
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/rIxfnD93N/model.json",modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function speak(){
    var synth = window.speechSynthasis;
    speak_data_1 = "prediction 1 :-"+prediction_1;
    speak_data_2 = "prediction 2 :-"+prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis); 
}