objects = [];
status = "";

function preload(){
    video = createVideo('video.mp4')
}

function setup(){
    canvas = createCanvas(450, 500);
    canvas.center();
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function gotResult(error, results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results);
        objects = results;
    }
}