song1="";
song2="";
rightWristX=0;
rightWristY=0;

leftWristX=0;
leftWristY=0;

function preload(){
    song1=loadSound("better.mp3");
    song2=loadSound("middle.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("model has loaded");
}

function gotPoses(results){
 if(results.length>0){
    console.log(results)

    rightWristX=results[0].pose.rightWrist.x;
    leftWristY=results[0].pose.leftWrist.y;

    rightWristX=results[0].pose.rightWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
 }
}

function draw(){
    image(video,0,0,600,500);
    song1.play();
    song1.setVolume(0.3);
    song1.rate(2.5);
}

