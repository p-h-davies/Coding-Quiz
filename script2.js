let quizEl = document.querySelector(".quiz-container");
const questionEl = document.querySelector("#question");
let answerElA = document.querySelector("#answerA");
let answerElB = document.querySelector("#answerB");
let answerElC = document.querySelector("#answerC");
let timeEl = document.querySelector("#timer")
let finishButton = document.querySelector("#finish")
let seeScoresButton = document.querySelector("#scores")
let scoreList = document.querySelector("#score-list")
let initialsEl = document.querySelector("#initials")

// Timer
var secondsLeft = 300;

var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "You have " + secondsLeft + " seconds left";
    if (secondsLeft < 0) {
        clearInterval(timerInterval);
        sendMessage();
    }
}, 1000);


//Hide buttons before game starts
timeEl.style.display = 'none';
seeScoresButton.style.display = 'none';
finishButton.style.display = 'none';
answerElA.style.display = 'none';
answerElB.style.display = 'none';
answerElC.style.display = 'none'
initialsEl.style.display = 'none'



//Questions 
let questionsList = [
    { title: "How do you change the colour of an H1 element in CSS?", answerA: "color", answerB: "font-color", answerC: "h1-color:", correctAnswer: "color" },
    { title: "How do you change the colour of an H22222 in CSS?", answerA: "co6666or", answerB: "font-color", answerC: "h1-color:", correctAnswer: "co6666or" },
    { title: "How do you change the colour of an H33333in CSS?", answerA: "colo65", answerB: "font-color", answerC: "h1-color:", correctAnswer: "color" },
    { title: "How do you change the colour of an H1 element in CSS?", answerA: "col444or", answerB: "font-color", answerC: "h1-color:", correctAnswer: "color" },
]


// Display Questions
let questionIndex = 0;

function displayQuestion() {
    questionEl.innerHTML = questionsList[questionIndex].title;
    answerElA.innerHTML = questionsList[questionIndex].answerA;
    answerElB.innerHTML = questionsList[questionIndex].answerB;
    answerElC.innerHTML = questionsList[questionIndex].answerC;
    questionIndex++;
}


//Start Quiz
let startEl = document.querySelector("#start");

startEl.addEventListener("click", function () {
    secondsLeft = 50;
    displayQuestion();
    startEl.style.display = 'none'
    seeScoresButton.style.display = 'none';
    finishButton.style.display = 'none';
    timeEl.style.display = 'inline';
    answerElA.style.display = 'inline';
    answerElB.style.display = 'inline';
    answerElC.style.display = 'inline'

}
);

//Cycle Through Questions
let score = 0;


answerElA.addEventListener("click", btnPressA);
function btnPressA() {
    var userSelection = questionsList[questionIndex - 1].answerA;
    var answer = questionsList[questionIndex - 1].correctAnswer;
    if ((userSelection == answer) && secondsLeft > 0) {
        score++;
        console.log("yes");
        console.log(score)
    } else if ((userSelection != answer) && secondsLeft > 0) {
        secondsLeft -= 10;
        timeEl.append("        10 secs lost!")
        console.log("no")
    }

    if (questionIndex < 4 && secondsLeft > 0) {
        displayQuestion();
    } else if (secondsLeft < 0 && userSelection !== answer) {
        secondsLeft -= 10;
        if (secondsLeft == 0 || secondsLeft < 0) {
            secondsLeft = 0
        }
        timeEl.textContent = "Game Over! You have " + secondsLeft + " seconds left";
        end()
    } else if (secondsLeft < 0 && userSelection == answer) {
        end()
    }
}


answerElB.addEventListener("click", btnPressB);
function btnPressB() {
    var userSelection = questionsList[questionIndex - 1].answerB;
    var answer = questionsList[questionIndex - 1].correctAnswer;
    if ((userSelection == answer) && secondsLeft > 0) {
        score++;
        console.log("yes");
        console.log(score)
    } else if ((userSelection != answer) && secondsLeft > 0) {
        secondsLeft -= 10;
        timeEl.append("        10 secs lost!")
        console.log("no")
    }

    if (questionIndex < 4 && secondsLeft > 0) {
        displayQuestion();
    } else if (secondsLeft < 0 && userSelection !== answer) {
        secondsLeft -= 10;
        if (secondsLeft == 0 || secondsLeft < 0) {
            secondsLeft = 0
        }
        timeEl.textContent = "Game Over! You have " + secondsLeft + " seconds left";
        end()
    } else if (secondsLeft < 0 && userSelection == answer) {
        end()

    }
}


answerElC.addEventListener("click", btnPressC);
function btnPressC() {
    var userSelection = questionsList[questionIndex - 1].answerC;
    var answer = questionsList[questionIndex - 1].correctAnswer;
    if ((userSelection == answer) && secondsLeft > 0) {
        score++;
        console.log("yes");
        console.log(score)
    } else if ((userSelection != answer) && secondsLeft > 0) {
        secondsLeft -= 10;
        timeEl.append("        10 secs lost!")
        console.log("no")
    }
    if (questionIndex < 4 && secondsLeft > 0) {
        displayQuestion();
    } else if (secondsLeft < 0 && userSelection !== answer) {
        secondsLeft -= 10;
        if (secondsLeft == 0 || secondsLeft < 0) {
            secondsLeft = 0
        }
        timeEl.textContent = "Game Over! You have " + secondsLeft + " seconds left";
        end()
    } else if (secondsLeft < 0 && userSelection == answer) {
        end()

    }
}

//Stop Timer
function stopTimer() {
    clearInterval(timerInterval)
}


// End Quiz
function end() {
    answerElA.style.display = 'none'
    answerElB.style.display = 'none'
    answerElC.style.display = 'none'
    seeScoresButton.style.display = 'inline';
    finishButton.style.display = 'inline';
    initialsEl.style.display = 'inline'
    quizEl.textContent = "Your score is " + score;
    stopTimer()
}


// Score saving
let responseArray = []

function saveScore() {
    let enteredInitials = document.getElementById("userInit").value;

    let responses = {
        score: score,
        initials: enteredInitials,
    }

    responseArray.push(responses)

    console.log(responseArray)

    localStorage.setItem("responses", JSON.stringify(responseArray));
}


finishButton.addEventListener("click", function (event) {
    event.preventDefault();
    saveScore();
});


function saveSave() {
    var getResponse = JSON.parse(localStorage.getItem("responses"));
    if (getResponse !== null) {
        responseArray = getResponse;
    }
}

saveSave()


function renderScores() {

    for (let index = 0; index < responseArray.length; index++) {
        const element = responseArray[index];
        var li = document.createElement('li');
        li.innerText = element.initials + "       " + element.score;
        scoreList.appendChild(li);
    }
}


seeScoresButton.addEventListener("click", function (event) {
    event.preventDefault();
    renderScores();
});


function sendMessage() {
    end();
    secondsLeft = 0
    timeEl.textContent = "Game Over! You have " + secondsLeft + " seconds left";
}