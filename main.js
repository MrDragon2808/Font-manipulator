function setup()
{
    video = createCapture(VIDEO);
    video.size(550 , 400);
    canvas = createCanvas(550 , 400);
    canvas.position(675,150);
    video.position(50,150)
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is initialized!');
}

function draw()
{
    background('#6bdcff');
}

function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
}
}