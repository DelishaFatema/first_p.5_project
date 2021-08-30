function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(200, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 100, 100, 450, 450);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(60, 60, 70);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(570, 60, 70);

    fill(0, 125, 0);
    stroke(0, 125, 0);
    rect(100, 38, 430, 30, 70);

    fill(0, 125, 0);
    stroke(0, 125, 0);
    rect(45, 100, 30, 450, 70);

    fill(0, 125, 0);
    stroke(0, 125, 0);
    rect(560, 100, 30, 450, 70);

}

function take_snapshot() {
    save("delisha_project.png")
}