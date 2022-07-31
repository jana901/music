sound1="";
sound2="";
leftWristX="";
leftWristY="";
rightWristX="";
rightWristY="";
scoreleftwrist=0;
scorerightwrist=0;
song1status="";
//sound2=peterpan
function preaload(){
    sound1=loadSound("music.mp3");
    sound2=loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on("pose",gotPoses)
}

function draw(){
    image(video,0,0,600,500);

    fill("#FF0000");
    stroke("#FF0000");
    
song1status=sound1.isPlaying();
    if(scoreleftwrist>0.2){
        circle(leftWristX,leftWristY,20);
        song2.stop();
        if(song1status==false){
            song1.play();
            document.getElementById("song").innerHTML="Song name="+"harrypotter theme";
        }
    }
    
}

function modelLoaded(){
console.log("Posenet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        scoreleftwrist=results[0].pose.keypoints[9].score;





console.log("left wrist x=" +leftWristX+",left wrist y= " +leftWristY);
console.log("right wrist x="+rightWristX+",right wrist y="+rightWristY);

    }
}