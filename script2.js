const questionEl = document.querySelector("#question");
let answerElA = document.querySelector("#answerA");
let answerElB = document.querySelector("#answerB");
let answerElC = document.querySelector("#answerC");
let timeEl = document.querySelector("#timer")


var secondsLeft = 30;
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    timeEl.textContent = "Time is up!";
}


let questionsList = [
    { title: "How do you change the colour of an H1 element in CSS?", answerA: "color:", answerB: "font-color", answerC: "h1-color:", correctAnswer: "color" },
    { title: "How do you change the colour of an H22222 in CSS?", answerA: "co6666or:", answerB: "font-color", answerC: "h1-color:", correctAnswer: "color" },
    { title: "How do you change the colour of an H33333in CSS?", answerA: "colo65:", answerB: "font-color", answerC: "h1-color:", correctAnswer: "color" },
    { title: "How do you change the colour of an H1 element in CSS?", answerA: "col444or:", answerB: "font-color", answerC: "h1-color:", correctAnswer: "color" },
]

let questionIndex = 0;

function displayQuestion() {
    questionEl.innerHTML = questionsList[questionIndex].title;
    answerElA.innerHTML = questionsList[questionIndex].answerA;
    answerElB.innerHTML = questionsList[questionIndex].answerB;
    answerElC.innerHTML = questionsList[questionIndex].answerC;
    questionIndex++;
}


let score = 0;

answerElA.addEventListener("click", btnPressA);
function btnPressA() {
    var userSelection = questionsList[questionIndex - 1].answerA;
    var answer = value.questionsList[questionIndex - 1].correctAnswer;
    console.log(answer)

    if ((userSelection == answer) & secondsLeft > 0) {
        score++
        console.log("yes");
    } else
        console.log("no")
    if (questionIndex < 3) {
        displayQuestion()
    } else {
        questionEl.textContent = "end"
    }
}

answerElB.addEventListener("click", btnPressB);
function btnPressB() {
    var userSelection = questionsList[questionIndex - 1].answerB;
    var answer = questionsList[questionIndex - 1].correctAnswer;
    console.log(answer)

    if ((userSelection.valueOf == answer.valueOf) & secondsLeft > 0) {
        score++
        console.log("yes");
    } else
        console.log("no")
    if (questionIndex < 3) {
        displayQuestion()
    } else {
        questionEl.textContent = "end"
    }
}

answerElC.addEventListener("click", btnPressC);
function btnPressC() {
    var userSelection = questionsList[questionIndex - 1].answerC;
    var answer = questionsList[questionIndex - 1].correctAnswer;
    console.log(answer)

    if ((userSelection.valueOf == answer.valueOf) & secondsLeft > 0) {
        score++
        console.log("yes");
    } else
        console.log("no")
    if (questionIndex < 3) {
        displayQuestion()
    } else {
        questionEl.textContent = "end"
    }
}

//Start Quiz
let startEl = document.querySelector("#start");

startEl.addEventListener("click", function () {
    setTime();
    displayQuestion();
    startEl.style.display = 'none'

}
);







//when all questions are answered, timer stops
//if user gets question wrong, minus 10 seconds from timer
//score logged