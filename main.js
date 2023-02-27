difference = 0;
rightWristX = 0; 
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 430);
    canvas.position(560, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    background('#969A97');

    document.getElementById("square_side").innerHTML = "Width And Height of a text will be = " + difference + "px";
    fill(255);
    stroke('#F90093');
    textSize(difference);
    text('text',0,430);
}

function gotPoses(results) {
    if(results.length > 0) {
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
