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
let penaltyEl = document.querySelector("#penalty-storage")
let warningEl = document.querySelector("#warning")

// Timer
var secondsLeft = 2000;

var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "You have " + secondsLeft + " seconds left";
    if (secondsLeft < 0) {
        clearInterval(timerInterval);
        sendMessage();
    }
}, 1000);


//Hide buttons before game starts
warningEl.style.display = 'none';
penaltyEl.style.display = 'none';
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
    { title: "How do you select a element by their ID using querySelector in vanilla javascript?", answerA: "'.answer'", answerB: "'#answer'", answerC: "'answer'", correctAnswer: "'#answer'" },
    { title: "Which of the following is a library which helps you work with time and dates?", answerA: "Bootstrap", answerB: "Day.js", answerC: "JQuery UI", correctAnswer: "Day.js" },
    { title: "How would you attribute 'display: none' to an element in vanilla Javascript?", answerA: "(style).display.none", answerB: "style(display: none)", answerC: "style.display = 'none'", correctAnswer: "style.display = 'none'" },
    { title: "Which of the following is good for accessibility?", answerA: "Using Alt Tags", answerB: "Using aria-labels", answerC: "Both", correctAnswer: "Both" },
    { title: "What does HTML stand for?", answerA: "Hypertext Markup Language", answerB: "Hypertext Markdown Language", answerC: "Hypercode Markup Language", correctAnswer: "Hypertext Markup Language" },
    { title: "How do you stop a timer in Javascript?", answerA: "setInterval()", answerB: "clearInterval()", answerC: "stopTimer()", correctAnswer: "clearInterval()" }
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
    secondsLeft = 70;
    displayQuestion();
    penaltyEl.style.display = 'inline-flex';
    warningEl.style.display = 'inline-flex';
    startEl.style.display = 'none'
    seeScoresButton.style.display = 'none';
    finishButton.style.display = 'none';
    timeEl.style.display = 'inline-flex';
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
    if (userSelection == answer && secondsLeft > 0) {
        score++;
        console.log("yes");
        console.log(score)
    } else if ((userSelection !== answer) && secondsLeft > 0 && questionIndex < 7) {
        secondsLeft -= 10;
        penaltyEl.append("        X        ")
        console.log("no")
    }


    if (questionIndex < 7 && secondsLeft > 0) {
        displayQuestion();
    } else if (questionIndex === 7 && userSelection !== answer) {
        secondsLeft -= 10;
        if (secondsLeft == 0 || secondsLeft < 0) {
            secondsLeft = 0
        }
        penaltyEl.append("        X        ")
        timeEl.textContent = "Game over! You finished with " + secondsLeft + " seconds left.";
        end()
    } else if (questionIndex === 7 && userSelection == answer) {
        timeEl.textContent = "Great job! You finished with " + secondsLeft + " seconds left.";
        end()
    } else if (secondsLeft < 0 && userSelection !== answer) {
        secondsLeft -= 10;
        if (secondsLeft == 0 || secondsLeft < 0) {
            secondsLeft = 0
        }
        penaltyEl.append("        X        ")
        timeEl.textContent = "Game over! You finished with " + secondsLeft + " seconds left.";
        end()
    } else if (secondsLeft < 0 && userSelection == answer) {
        end()
    }
}


answerElB.addEventListener("click", btnPressB);
function btnPressB() {
    var userSelection = questionsList[questionIndex - 1].answerB;
    var answer = questionsList[questionIndex - 1].correctAnswer;
    if (userSelection == answer && secondsLeft > 0) {
        score++;
        console.log("yes");
        console.log(score)
    } else if ((userSelection !== answer) && secondsLeft > 0 && questionIndex < 7) {
        secondsLeft -= 10;
        penaltyEl.append("        X        ")
        console.log("no")
    }


    if (questionIndex < 7 && secondsLeft > 0) {
        displayQuestion();
    } else if (questionIndex === 7 && userSelection !== answer) {
        secondsLeft -= 10;
        if (secondsLeft == 0 || secondsLeft < 0) {
            secondsLeft = 0
        }
        penaltyEl.append("        X        ")
        timeEl.textContent = "Game over! You finished with " + secondsLeft + " seconds left.";
        end()
    } else if (questionIndex === 7 && userSelection == answer) {
        timeEl.textContent = "Great job! You finished with " + secondsLeft + " seconds left.";
        end()
    } else if (secondsLeft < 0 && userSelection !== answer) {
        secondsLeft -= 10;
        if (secondsLeft == 0 || secondsLeft < 0) {
            secondsLeft = 0
        }
        penaltyEl.append("        X        ")
        timeEl.textContent = "Game over! You finished with " + secondsLeft + " seconds left.";
        end()
    } else if (secondsLeft < 0 && userSelection == answer) {
        end()
    }
}


answerElC.addEventListener("click", btnPressC);
function btnPressC() {
    var userSelection = questionsList[questionIndex - 1].answerC;
    var answer = questionsList[questionIndex - 1].correctAnswer;
    if (userSelection == answer && secondsLeft > 0) {
        score++;
        console.log("yes");
        console.log(score)
    } else if ((userSelection !== answer) && secondsLeft > 0 && questionIndex < 7) {
        secondsLeft -= 10;
        penaltyEl.append("        X        ")
        console.log("no")
    }


    if (questionIndex < 7 && secondsLeft > 0) {
        displayQuestion();
    } else if (questionIndex === 7 && userSelection !== answer) {
        secondsLeft -= 10;
        if (secondsLeft == 0 || secondsLeft < 0) {
            secondsLeft = 0
        }
        penaltyEl.append("        X        ")
        timeEl.textContent = "Game over! You finished with " + secondsLeft + " seconds left.";
        end()
    } else if (questionIndex === 7 && userSelection == answer) {
        timeEl.textContent = "Great job! You finished with " + secondsLeft + " seconds left.";
        end()
    } else if (secondsLeft < 0 && userSelection !== answer) {
        secondsLeft -= 10;
        if (secondsLeft == 0 || secondsLeft < 0) {
            secondsLeft = 0
        }
        penaltyEl.append("        X        ")
        timeEl.textContent = "Game over! You finished with " + secondsLeft + " seconds left.";
        end()
    } else if (secondsLeft < 0 && userSelection == answer) {
        end()
    }
}

//Stop Timer
function stopTimer() {
    clearInterval(timerInterval)
}

function sendMessage() {
    end();
    secondsLeft = 0
    timeEl.textContent = "Game over! You finished with " + secondsLeft + " seconds left";
}


// End Quiz
function end() {
    warningEl.style.display = 'none';
    answerElA.style.display = 'none'
    answerElB.style.display = 'none'
    answerElC.style.display = 'none'
    seeScoresButton.style.display = 'inline';
    finishButton.style.display = 'inline';
    initialsEl.style.display = 'inline-flex';
    quizEl.textContent = "Your score is " + score;
    stopTimer()
}


// Save Score
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

//Render Saved Scores
function renderScores() {
    for (let index = 0; index < responseArray.length; index++) {
        const element = responseArray[index];
        var li = document.createElement('li');
        li.innerText = "Initials: " + element.initials + " | Score: " + element.score;
        scoreList.appendChild(li);
    }
}

seeScoresButton.addEventListener("click", function (event) {
    event.preventDefault();
    renderScores();
});
