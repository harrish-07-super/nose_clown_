noseX=0;
noseY=0;
function preload(){
clown=loadImage("https://i.postimg.cc/ZR0kXLw1/R.png");
}

function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
img=createCapture(VIDEO);
img.hide();

posenet=ml5.poseNet(img,modeloaded);


posenet.on("pose", getpose);

}

function modeloaded(){
    console.log("poseNet model is loaded");
}

function getpose(results){
if(results.length>0){

    console.log(results);
    noseX=results[0].pose.nose.x-40;
    noseY=results[0].pose.nose.y-60;
    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY);

}


}

function draw(){
image(img,0,0,600,400);

fill(255,0,0);
stroke(255,0,0);
//circle(noseX,noseY,20);

image(clown,noseX,noseY,40,40);
}


function takesnapshot(){
    save("jokernose.png");
}