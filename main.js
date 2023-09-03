nose_x=0;
nose_y=0;


function preload(){
mus=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("poseNet is loaded");
}

function draw(){
image(video,0,0,300,300);
image(mus,nose_x,nose_y,32,32);
}

function take_snapshot(){
    save("charger.png");

}



function gotPoses(results){
    if(results.length>0){
        console.log(results);

        nose_x=results[0].pose.nose.x-15;
        nose_y=results[0].pose.nose.y+3;
        console.log("nose_x= "+nose_x);
        console.log("nose_y= "+nose_y);
    }
}

