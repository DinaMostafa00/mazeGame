function setup() {
  createCanvas(800, 700);
  background(193, 154, 111);
  noStroke();
  angleMode(DEGREES);
  frameRate(30);
}

//--------------------------------------------------------

// used help from this video https://www.youtube.com/watch?v=iR0m6j8RwAI&t=3s

// variables for Timer
let totalTime;
let timeLimit = 100;
let homePageTime;
let gameTime;
function timer(x, y) {
  // homePageTime = homePageTime;
  timeLimit = 100;
  totalTime = millis();
  timefix = totalTime - homePageTime;
  gameTime = int(timefix / 1000);
  let totalTimeText = "Timer:" + (timeLimit - gameTime);
  fill(255, 255, 255);
  textStyle(BOLD);
  textSize(18);
  textFont("andale mono");
  text(totalTimeText, x, y, width);

  if (gameTime > 100) {
    state = "goToTimeOut";
  }
}
//--------------------------------------------------------
///START SCREEN
//-----------------
//array for the shelfs
let shelf = [
  { x_position: 0, y_position: 100, width: 800, height: 20 },
  { x_position: 0, y_position: 300, width: 800, height: 20 },
  { x_position: 0, y_position: 500, width: 800, height: 20 },
  { x_position: 0, y_position: 650, width: 800, height: 20 },
];

//array for the books
let Books = [
  { x_position: 0, y_position: 10, width: 20, height: 90 },
  { x_position: 150, y_position: 10, width: 20, height: 90 },
  { x_position: 300, y_position: 10, width: 20, height: 90 },
  { x_position: 450, y_position: 10, width: 20, height: 90 },
  { x_position: 600, y_position: 10, width: 20, height: 90 },
  { x_position: 750, y_position: 10, width: 20, height: 90 },
  { x_position: 0, y_position: 210, width: 20, height: 90 },
  { x_position: 300, y_position: 210, width: 20, height: 90 },
  { x_position: 450, y_position: 210, width: 20, height: 90 },
  { x_position: 600, y_position: 210, width: 20, height: 90 },
  { x_position: 750, y_position: 210, width: 20, height: 90 },
  { x_position: 0, y_position: 410, width: 20, height: 90 },
  { x_position: 150, y_position: 410, width: 20, height: 90 },
  { x_position: 300, y_position: 410, width: 20, height: 90 },
  { x_position: 450, y_position: 410, width: 20, height: 90 },
  { x_position: 600, y_position: 410, width: 20, height: 90 },
  { x_position: 750, y_position: 410, width: 20, height: 90 },
  { x_position: 0, y_position: 560, width: 20, height: 90 },
  { x_position: 150, y_position: 560, width: 20, height: 90 },
  { x_position: 300, y_position: 560, width: 20, height: 90 },
  { x_position: 450, y_position: 560, width: 20, height: 90 },
  { x_position: 750, y_position: 560, width: 20, height: 90 },
];

// let lightBrown = color(193, 154, 111);
// let darkBrown = color(117, 76, 36);
// let green = color(37, 74, 0);
// let red = color(193, 39, 45);
// let purple = color(151, 61, 112);
// let yellow = color(247, 147, 30);
// let lightBlue = color(157, 154, 183);
// let darkBlue = color(130, 150, 230);

function drawBooks(object) {
  push();
  noStroke();
  translate(object.x_position, object.y_position);
  //mainbook
  fill(37, 74, 0);
  rect(0, 0, object.width, object.height);
  //rest of the books
  fill(130, 150, 230);
  rect(20, -5, object.width + 10, object.height + 5);
  fill(247, 147, 30);
  rect(50, 5, object.width + 5, object.height - 5);
  fill(193, 39, 45);
  rect(75, 0, object.width, object.height);
  fill(117, 76, 36);
  rect(95, -5, object.width + 10, object.height + 5);
  fill(151, 61, 112);
  rect(125, 5, object.width + 5, object.height - 5);
  pop();
}

/////

function startScreen(x, y) {
  // homePageTime = totalTime;
  background(200, 230, 255);

  //SHELFS
  for (let i = 0; i < shelf.length; i++) {
    fill(193, 154, 111);
    rect(
      shelf[i].x_position,
      shelf[i].y_position,
      shelf[i].width,
      shelf[i].height
    );
  }
  //BOOKS
  for (let i = 0; i < Books.length; i++) {
    drawBooks(Books[i]);
  }

  //tilted books
  push();
  fill(37, 74, 0);
  rect(600, 567, 110, 38);
  fill(130, 150, 230);
  rect(602, 605, 103, 25);
  fill(247, 147, 30);
  rect(605, 630, 90, 20);

  //welcome to jönköping
  fill(250, 240, 200);
  rect(180, 180, 100, 120);

  let welcomeText = "Welcome to Jönköping University";
  push();
  fill(151, 61, 112);
  textStyle(BOLD);
  textSize(13);
  textAlign(CENTER);
  textFont("andale mono");
  text(welcomeText, 193, 210, 80);
  pop();

  let startText = "Start";
  fill(247, 147, 30);
  textStyle(BOLD);
  textSize(26);
  textFont("andale mono");
  text(startText, 615, 575, 80);
  pop();

  //instruction book
  push();
  translate(703, 645);
  rotate(-80);
  fill(50, 50, 120);
  rect(0, 0, 120, 30);

  let instructionTitle = "Instructions";
  fill(247, 147, 30);
  textStyle(BOLD);
  textSize(13);
  textFont("andale mono");
  text(instructionTitle, 10, 8, 80);
  pop();
}

function instructionBook(x, y) {
  stroke(0, 0, 0, 30);
  strokeWeight(20);

  fill(255, 255, 240);
  rect(x + 10, y + 10, 700, 500, 1);

  stroke(193, 154, 111);
  strokeWeight(20);

  fill(255, 255, 240);
  rect(x, y, 700, 500, 1);

  push();
  strokeWeight(15);
  stroke(117, 76, 36, 40);
  line(400, 67, 400, 574);
  pop();

  let instructionTextTitle = "How to play";
  noStroke();
  fill(0, 0, 0);
  textStyle(BOLD);
  textSize(26);
  textFont("andale mono");
  text(instructionTextTitle, 95, 115, 200);

  let instructionText =
    "Welcome to the spring semester of Jönköping university. To commence on this journey, you need to make sure to gather all of your assignments. In order to do this you need to make it past the deadlines without them catching you. If a deadline catches you, you will lose a life. Make sure to capture all of your assignments, and good luck!";
  textSize(16);
  text(instructionText, 95, 170, 260);

  let instructionNav = "To move your student:";
  let moveStudent = "⬅" + "➡" + "⬆" + "⬇";
  let showAssignments = "Press the space key to show the assignments";
  let deadlinesAndLives = "- Lose 1 life if you collide with a deadline";
  let assignmentsToWin =
    "- Catch all assignments to be able to finish the semester";

  push();
  textAlign(CENTER);
  text(instructionNav, 420, 148, 279);
  pop();
  text(showAssignments, 450, 250, 279);
  text(deadlinesAndLives, 450, 320, 279);
  text(assignmentsToWin, 450, 370, 279);

  push();
  textAlign(CENTER);
  textSize(40);
  text(moveStudent, 440, 180, 279);
  pop();

  fill(157, 157, 157);
  textSize(20);
  textFont("sans-serif");
  text("X", 710, 110);
}

//GAME SCREEN
//----------------------------------------------------

//SCORE BOX
function score(x, y) {
  push();
  rect(x, y, 800, 50);
  pop();
}

///////////assignments array
let assignments = [];
function assignmentReset() {
  assignments = [
    //asignment1
    { x_position: 10, y_position: 100, width: 20, height: 35, visible: true },

    //asignment2
    { x_position: 15, y_position: 400, width: 20, height: 35, visible: true },

    //asignment3
    {
      x_position: 750,
      y_position: 210,
      width: 20,
      height: 35,
      visible: false,
    },

    //asignment4
    {
      x_position: 750,
      y_position: 405,
      width: 20,
      height: 35,
      visible: false,
    },
    //asignment5
    {
      x_position: 750,
      y_position: 525,
      width: 20,
      height: 35,
      visible: false,
    },

    //asignment6
    {
      x_position: 750,
      y_position: 640,
      width: 20,
      height: 35,
      visible: false,
    },
  ];
}
assignmentReset();
//Deadlines array

let deadlines = [];
function deadlineReset() {
  deadlines = [
    {
      x_position: 160,
      y_position: 90,
      width: 25,
      height: 25,
      speedY: 8,
      speedX: 0,
      min: 90,
      max: 340,
    },
    {
      x_position: 210,
      y_position: 340,
      width: 25,
      height: 25,
      speedY: 8,
      speedX: 0,
      min: 90,
      max: 345,
    },
    {
      x_position: 230,
      y_position: 340,
      width: 25,
      height: 25,
      speedY: 0,
      speedX: 10,
      min: 230,
      max: 750,
    },
    {
      x_position: 370,
      y_position: 690,
      width: 25,
      height: 25,
      speedY: 6,
      speedX: 0,
      min: 381,
      max: 690,
    },
    {
      x_position: 15,
      y_position: 510,
      width: 25,
      height: 25,
      speedY: 0,
      speedX: 7,
      min: 10,
      max: 370,
    },

    {
      x_position: 161,
      y_position: 390,
      width: 25,
      height: 25,
      speedY: 4,
      speedX: 0,
      min: 390,
      max: 513,
    },
    {
      x_position: 590,
      y_position: 670,
      width: 25,
      height: 25,
      speedY: 15,
      speedX: 0,
      min: 90,
      max: 670,
    },
    {
      x_position: 640,
      y_position: 210,
      width: 25,
      height: 25,
      speedY: 4,
      speedX: 0,
      min: 210,
      max: 340,
    },
  ];
}
deadlineReset();
//wallss array
let walls = [
  { x_position: 0, y_position: 520, width: 250, height: 30 },
  { x_position: 150, y_position: 640, width: 30, height: 70 },
  { x_position: 380, y_position: 480, width: 30, height: 300 },
  { x_position: 170, y_position: 380, width: 30, height: 50 },
  { x_position: 0, y_position: 350, width: 380, height: 30 },
  { x_position: 170, y_position: 250, width: 30, height: 100 },
  { x_position: 170, y_position: 50, width: 30, height: 100 },
  { x_position: 0, y_position: 50, width: 380, height: 30 },
  //right walls
  { x_position: 600, y_position: 590, width: 200, height: 30 },
  { x_position: 600, y_position: 470, width: 200, height: 30 },
  { x_position: 600, y_position: 350, width: 200, height: 30 },
  { x_position: 600, y_position: 170, width: 200, height: 30 },
  { x_position: 600, y_position: 130, width: 30, height: 50 },
  { x_position: 600, y_position: 200, width: 30, height: 60 },
  { x_position: 600, y_position: 0, width: 30, height: 60 },
  //boarder walls
  { x_position: -5, y_position: 51, width: 10, height: 700 },
  { x_position: 0, y_position: 690, width: 800, height: 10 },
  { x_position: 790, y_position: 0, width: 10, height: 700 },
  { x_position: 0, y_position: 50, width: 600, height: 10 },
];

//THE STUDENT
function student(xStudent, yStudent, rotation) {
  push();
  translate(xStudent, yStudent);
  rotate(rotation);
  //legs
  fill(37, 74, 0);
  ellipse(10, -15, 15);
  ellipse(-10, -15, 15);

  //shoulders
  fill(151, 61, 112);
  ellipse(-20, 0, 20);
  ellipse(20, 0, 20);
  //head
  fill(247, 147, 30);
  ellipse(0, 0, 40);

  pop();
}
//end of student

///////Home Box
let homeBox = [{ x_position: 630, y_position: 0, width: 200, height: 170 }];

//Collision

function checkForCollisionHomeBox(x, y) {
  let collisiondetectedHomeBox = false;
  for (let i = 0; i < homeBox.length; i++) {
    if (checkCollisionWithObject(x, y, homeBox[i])) {
      // console.log("ohh");
      collisiondetectedHomeBox = true;
      // let state = "results"
    }
  }
  return collisiondetectedHomeBox;
}

function checkForCollision(x, y) {
  let collisiondetected = false;

  // let numberOfAssignments = 0;
  //walls
  for (let i = 0; i < walls.length; i++) {
    if (checkCollisionWithObject(x, y, walls[i])) {
      console.log("hey");
      collisiondetected = true;
    }
  }
  //assignments
  for (let i = 0; i < assignments.length; i++) {
    if (checkCollisionWithObject(x, y, assignments[i])) {
      console.log("yay");
      if (assignments.visible === true) {
        assignments.splice(i, 1);
        assignmentsCount += 1;
      }
    }
  }
  //deadlines
  for (let i = 0; i < deadlines.length; i++) {
    if (checkCollisionWithObjectandDeadline(x, y, deadlines[i])) {
      console.log("wow");
      deadlines.splice(i, 1);
      livesCount -= 1;
      if (livesCount < 1) {
        state = "fail";
      }
      // frameRate(10);
    }
  }
  // //Homebox
  // for (let i = 0; i < homeBox.length; i++) {
  //   if (checkCollisionWithObject(x, y, homeBox[i])) {
  //     console.log("ohh");
  //     collisiondetected = true;
  //     // let state = "results"
  //   }
  // }
  return collisiondetected;
}

function checkCollisionWithObjectandDeadline(x, y, object) {
  if (
    x >= object.x_position &&
    x <= object.x_position + object.width &&
    y >= object.y_position &&
    y <= object.y_position + object.height
  ) {
    return true;
  } else {
    return false;
  }
}

function checkCollisionWithObject(x, y, object) {
  if (
    x > object.x_position &&
    x < object.x_position + object.width &&
    y > object.y_position &&
    y < object.y_position + object.height
  ) {
    return true;
  } else {
    return false;
  }
}

// top bar
function topBar(x, y) {
  // let assignmentText = "Assignments: " + (assignments - assignments.length);
  let assignmentText = "Assignments: " + assignmentsCount;
  push();
  fill(255, 255, 255);
  textStyle(BOLD);
  textSize(18);
  textFont("andale mono");
  text(assignmentText, x, y, width);
  pop();
}

// Lives
function Lives(x, y) {
  let LivesText = "Lives: " + livesCount;
  push();
  fill(255, 255, 255);
  textStyle(BOLD);
  textSize(18);
  textFont("andale mono");
  text(LivesText, x, y, width);
  pop();
}

// function exitGame(x, y) {
//   push();
//   fill(255, 255, 255);
//   textStyle(BOLD);
//   textSize(20);
//   textFont("sans-serif");
//   text("X", x, y);
//   pop();
// }

function drawAssignment(object) {
  push();
  fill(0, 0, 0);
  translate(object.x_position, object.y_position);
  //  Back book
  fill(0, 0, 0);
  rect(-5, 0, 25, 35);
  //front
  fill(27, 20, 100);
  rect(0, 0, object.width, object.height);
  //top small rect
  fill(255, 255, 255);
  rect(15, 10, object.width - 30, 3);

  pop();
}

function failScreen() {
  background(157, 154, 183);
  noStroke();
  fill(255, 255, 255);
  rect(100, 50, 500, 600);

  let sorry = "Sorry, you failed!";
  let gradeFail =
    "You have unsuccessfully reached all of the learning-outcomes of this semester.";
  let gradeConditionsFail =
    "You got caught by 3 of the deadlines, which means you could not pass this semester, better luck next time!";

  fill(0, 0, 0);
  textStyle(BOLD);
  textSize(32);
  textFont("andale mono");
  text(sorry, 150, 110, 250);
  textSize(18);

  text(gradeFail, 150, 220, 400);
  text(gradeConditionsFail, 150, 300, 400);

  fill(193, 39, 45);
  ellipse(530, 125, 90);

  let finalGrade = "X";
  fill(255, 255, 255);
  textFont("arial");
  textSize(55);
  text(finalGrade, 512, 102, width);

  fill(247, 147, 30);
  rect(270, 480, 150, 50, 5);

  let playMore = "Play again";
  fill(255, 255, 255);
  textSize(18);
  textFont("andale mono");

  text(playMore, 295, 496, width);
}

function wonScreen() {
  background(157, 154, 183);
  noStroke();
  fill(255, 255, 255);
  rect(100, 50, 500, 600);

  let congrats = "Congratulations!";
  let grade = "You have successfully completed the semester!";
  let gradeConditions = "To do this you have:";
  let caughtAssignments = "- Caught all of the 6 assignments";
  let caughtDeadlines =
    "- Made it to the end of the semester without getting caught by more than 3 deadlines";
  let timeComplete = "- Completed the semester within the time-limit";

  fill(0, 0, 0);
  textStyle(BOLD);
  textSize(32);
  textFont("andale mono");
  text(congrats, 150, 110, 200);
  textSize(18);

  text(grade, 150, 200, 500);
  text(gradeConditions, 150, 250, 500);
  text(caughtAssignments, 150, 290, 500);
  text(caughtDeadlines, 150, 320, 400);
  text(timeComplete, 150, 370, 500);

  fill(193, 39, 45);
  ellipse(530, 125, 90);

  let finalGrade = "✔";
  fill(255, 255, 255);
  textFont("arial");
  textSize(55);
  text(finalGrade, 510, 102, width);

  fill(247, 147, 30);
  rect(270, 480, 150, 50, 5);

  let playMore = "Play again";
  fill(255, 255, 255);
  textSize(18);
  textFont("andale mono");

  text(playMore, 295, 496, width);
}

function timeOut() {
  background(157, 154, 183);
  noStroke();
  fill(255, 255, 255);
  rect(100, 50, 500, 600);

  let timeOutTitle = "Oh no!";
  let notOnTime = "You did not finish this semester on time.";
  let timeConditions = "Finish the semester within 2 minutes!";

  fill(0, 0, 0);
  textStyle(BOLD);
  textSize(32);
  textFont("andale mono");
  text(timeOutTitle, 150, 110, 250);
  textSize(18);

  text(notOnTime, 150, 220, 400);
  text(timeConditions, 150, 300, 400);

  fill(193, 39, 45);
  ellipse(530, 125, 90);

  let finalGrade = "X";
  fill(255, 255, 255);
  textFont("arial");
  textSize(55);
  text(finalGrade, 512, 102, width);

  fill(247, 147, 30);
  rect(270, 480, 150, 50, 5);

  let playMore = "Play again";
  fill(255, 255, 255);
  textSize(18);
  textFont("andale mono");

  text(playMore, 295, 496, width);
}

function resetGame() {
  xStudent = 100;
  yStudent = 650;
  rotation = 0;
  speed = 0;
  yDeadline = 100;
  xDeadline = 200;
  speedDeadlineX = 5;
  speedDeadlineY = 5;
  studentSpeed = 5;
  tempXstudent = xStudent - 10;
  tempYstudent = yStudent - 10;
  assignmentsCount = 0;
  livesCount = 3;
}

// game screen trial is here//////////

function gamePage() {
  clear();
  setup();
  fill(100, 0, 0);
  score(0, 0);
  fill(100, 100, 0);
  topBar(50, 20);
  Lives(250, 20);
  timer(400, 20);
  //   timeCounter(400, 60);
  // exitGame(18, 35);
  fill(0, 0, 0);

  //HomeBox
  for (let i = 0; i < homeBox.length; i++) {
    fill(0, 76, 36);
    rect(
      homeBox[i].x_position,
      homeBox[i].y_position,
      homeBox[i].width,
      homeBox[i].height
    );
  }

  //asignments
  if (keyIsDown(32)) {
    for (let i = 0; i < assignments.length; i++) {
      drawAssignment(assignments[i]);
      assignments.visible = true;
    }
  } else {
    assignments.visible = false;
  }

  //walls
  for (let i = 0; i < walls.length; i++) {
    fill(117, 76, 36);
    rect(
      walls[i].x_position,
      walls[i].y_position,
      walls[i].width,
      walls[i].height
    );
  }

  //deadlines
  for (let i = 0; i < deadlines.length; i++) {
    fill(193, 39, 45);
    ellipse(
      deadlines[i].x_position,
      deadlines[i].y_position,
      deadlines[i].width,
      deadlines[i].height
    );
    //the equations
    deadlines[i].x_position += deadlines[i].speedX;
    deadlines[i].y_position += deadlines[i].speedY;
    if (deadlines[i].speedX !== 0) {
      if (
        deadlines[i].x_position < deadlines[i].min ||
        deadlines[i].x_position > deadlines[i].max
      ) {
        deadlines[i].speedX = deadlines[i].speedX * -1;
      }
    } else if (deadlines[i].speedY !== 0) {
      if (
        deadlines[i].y_position < deadlines[i].min ||
        deadlines[i].y_position > deadlines[i].max
      ) {
        deadlines[i].speedY = deadlines[i].speedY * -1;
      }
    }
  }

  //// Collision

  // 1) moving the student

  tempXstudent = xStudent;
  tempYstudent = yStudent;

  //right =39  left=37
  if (keyIsDown(39)) {
    tempXstudent = tempXstudent + studentSpeed;
    rotation = 90;
  } else if (keyIsDown(37)) {
    tempXstudent = tempXstudent - studentSpeed;
    rotation = -90;
  } else {
    speed = 0;
  }

  //up =38 down= 40
  if (keyIsDown(38)) {
    tempYstudent = tempYstudent - studentSpeed;
    rotation = 0;
  } else if (keyIsDown(40)) {
    tempYstudent = tempYstudent + studentSpeed;
    rotation = 180;
  }

  //2) check for collsion //   3) reset or temp player

  if (checkForCollision(tempXstudent, tempYstudent) === false) {
    xStudent = tempXstudent;
    yStudent = tempYstudent;
  }

  student(xStudent, yStudent, rotation);

  if (checkForCollisionHomeBox(xStudent, yStudent) && assignmentsCount === 6) {
    state = "won";
    console.log("wiii");
  }
}

//---------------------------------------------------------------

//VARIABLES
let xStudent = 100;
let yStudent = 650;
let rotation = 0;
let speed = 0;
let yDeadline = 100;
let xDeadline = 200;
let speedDeadlineX = 5;
let speedDeadlineY = 5;
let studentSpeed = 5;
let tempXstudent = xStudent - 10;
let tempYstudent = yStudent - 10;
let assignmentsCount = 0;
let livesCount = 3;
let state = "start";

// let timelimit = 20;

function draw() {
  // SWITCHING SCREENS
  if (state === "start") {
    startScreen(0, 0);
  } else if (state === "instructions") {
    instructionBook(50, 70);
  } else if (state === "exit") {
    startScreen(0, 0);
  } else if (state === "game") {
    gamePage();
  } else if (state === "fail") {
    failScreen(0, 0);
    resetGame();
  } else if (state === "won") {
    wonScreen(0, 0);
    resetGame();
  } else if (state === "goToTimeOut") {
    resetGame();
    timeOut();
  } else if (state === "playAgain") {
    startScreen(0, 0);
    //reseting the array
    assignmentReset();
    //Deadlines array
    deadlineReset();
  }
}

//// the mouse click function for the buttons
function mouseClicked() {
  if (mouseX > 700 && mouseX < 730 && mouseY < 700 && mouseY > 530) {
    instructionIsClicked = true;
    state = "instructions";
    console.log("instructions clicked");
  }

  if (mouseX >= 710 && mouseX <= 720 && mouseY >= 95 && mouseY <= 110) {
    state = "exit";
  }

  if (mouseX >= 600 && mouseX <= 710 && mouseY >= 567 && mouseY <= 605) {
    state = "game";
    console.log("happens");
    homePageTime = millis();
  }

  if (mouseX >= 270 && mouseX <= 420 && mouseY >= 480 && mouseY <= 530) {
    resetGame();
    state = "playAgain";
  }
}
