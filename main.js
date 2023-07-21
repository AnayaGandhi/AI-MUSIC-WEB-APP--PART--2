Shut_down_song="";
Butter_song="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
   Shut_down_song = loadSound("Shut_Down_song.mp3");
    Butter_song = loadSound("Butter_song.mp3");
}

function draw(){
    image(video,0,0,600,530);
}