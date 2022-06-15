left_wrist_x=0;
right_wrist_x=0;
difference=0;
function setup(){
    canvas=createCanvas(550,550);
    canvas.position(525, 200);
    video=createCapture(VIDEO);
    video.size(400,400);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }
    function modelLoaded(){
        console.log('PoseNet has been initialized');

    }
    function draw(){
        background("#87cefa");
        document.getElementById("font-size").innerHTML= "Font Size of the Text will be = "+difference+"px";
        fill("#00ff0a");
        textSize(difference);
        text('HELLO', 50, 400);
    }
    function gotPoses(results){
        if(results.length>0){
            console.log(results);
            right_wrist_x= results[0].pose.rightWrist.x;
            left_wrist_x= results[0].pose.leftWrist.x;    
            difference=floor(left_wrist_x - right_wrist_x); 
            console.log("rightwrist_x="+results[0].pose.rightWrist.x+"rightwrist_y"+results[0].pose.rightWrist.y);
            console.log("leftwrist_x="+results[0].pose.leftWrist.x+"leftwrist_y"+results[0].pose.leftWrist.y);
        }
    }