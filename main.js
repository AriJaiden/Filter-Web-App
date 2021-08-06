noseX=0;
noseY=0;
LefteyeX=0;
LefteyeY=0;
RighteyeX=0;
RighteyeY=0;
function preload(){
nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
eyes=loadImage('https://i.postimg.cc/Y2QsKYT4/shiny-removebg-preview.png');
}
function setup() {
    Canvas=createCanvas(400, 400);
    Canvas.center();
    video=createCapture(VIDEO);
    video.position(400, 400);
    video.size(400, 400);
    video.hide();
    PoseNet=ml5.poseNet(video, modelLoaded);
    function modelLoaded(){
        console.log("PoseNet is working");
    }
  }

  
  function draw() {
      image(video, 0, 0, 400, 400);
      image(nose, noseX, noseY, 50, 50);
      image(eyes,LefteyeX,LefteyeY, 50, 50);
      image(eyes,RighteyeX,RighteyeY, 50, 50);
  }

  function TakeImg(){
      save("clown_image.png");
  }

  function Activate(){
      PoseNet.on('pose',gotPoses);
      function gotPoses(results){
          if(results.length>0){
              console.log(results);
              console.log(results[0].pose.nose.x);
              console.log(results[0].pose.nose.y);
              LefteyeX=results[0].pose.leftEye.x;
              LefteyeY=results[0].pose.leftEye.y;
              RighteyeX=results[0].pose.rightEye.x;
              RighteyeY=results[0].pose.rightEye.y;
              noseX=results[0].pose.nose.x;
              noseY=results[0].pose.nose.y;
          }   
      }
  }