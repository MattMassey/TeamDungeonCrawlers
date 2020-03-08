this.canvas = document.getElementById('game-canvas'),
this.context = this.canvas.getContext('2d'),
this.fpsElement = document.getElementById('fps'),

// Constants............................................................

GAMESIZE = 768
GRIDNUM = 12
GRIDSIZE = GAMESIZE / GRIDNUM
//gridsize is 64

// States............................................................

this.paused = false;
this.deleting = false;
this.PAUSED_CHECK_INTERVAL = 200;
this.windowHasFocus = true;
this.countdownInProgress = false;

// Images............................................................

background  = new Image(),
runnerImage = new Image(),

// Time..............................................................

this.lastAnimationFrameTime = 0,
this.lastFpsUpdateTime = 0,
this.fps = 60,

this.fpsElement = document.getElementById('fps'),

// Toast.............................................................

this.toastElement = document.getElementById('toast'),

// Launch game.........................................................

initializeImages();

function initializeImages() {
background.src = 'img/basic_dungeon_room.png';
runnerImage.src = 'img/earth_god_front.png';

//onload occurs when object has been loaded
background.onload = function (e) {
  startGame();
};
}

function startGame() {
draw();
}

function draw() {
drawBackground();
//    drawPlatforms();
drawRunner();
}

function drawBackground() {
  //background gets drawn and placed on the canvas
context.drawImage(background, 0, 0);
}

//will drawPlatform be used?
function drawPlatform(data) {
var platformTop = calculatePlatformTop(data.track);

context.lineWidth = PLATFORM_STROKE_WIDTH;
context.strokeStyle = PLATFORM_STROKE_STYLE;
context.fillStyle = data.fillStyle;
context.globalAlpha = data.opacity;

context.strokeRect(data.left, platformTop, data.width, data.height);
context.fillRect  (data.left, platformTop, data.width, data.height);
}



function drawRunner() {
context.drawImage(runnerImage,
  (GAMESIZE/2),
 250);
}


// Level Transitions

function mouseClick() {
  window.addEventListener("mousemove", function(e) {
    mouseX = e.pageX - canvas.offsetLeft;
    mouseY = e.pageY - canvas.offsetTop; //this updates the mouse coordinates
  });

  if (typeof mousemove != "undefined") {
    window.addEventListener("mousemove", mousemove);
  }
}

function update() {
  if (deleting) {
      context.clearRect(0, 0, canvas.width, canvas.height);
  }
}

update();
setInterval(update, 10); //JavaScript must keep checking if you're deleting anything. You can decrease the interval for more frequent updating.


function changeLevel() {

}

// Controls..........................................................
window.onkeydown = function(e) {
  var key = e.keyCode;

  //A and left arrow
  if (key === 65|| key === 37) {
    //turnleft method here
    //functions here should bind sprite to the movements    
  }
  //S and down arrow
  else if(key === 83 || key === 40){
    //turn down
  }
  //D and right arrow
  else if(key === 68 || key === 39){
    //turn right method here
  }
  //W and Up arrow
  else if (key === 87 || key === 38){
    //turn up
  }
  else if (key === 80){
    //toggle pause here
  }
}