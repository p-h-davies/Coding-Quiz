let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');
let previousButton = document.getElementById("previous");
let nextButton = document.getElementById("next");
let questionCard = document.querySelectorAll(".slide");


let quizQuestions = [
    {
        question: "What is 10/2?",
        answers: {
            a: '3',
            b: '5',
            c: '115'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is 30/3?",
        answers: {
            a: '3',
            b: '5',
            c: '10'
        },
        correctAnswer: 'c'
    },
    {
        question: "What is 30/3?",
        answers: {
            a: '3',
            b: '5',
            c: '10'
        },
        correctAnswer: 'c'
    },
    {
        question: "What is 30/3?",
        answers: {
            a: '3',
            b: '5',
            c: '10'
        },
        correctAnswer: 'c'
    }
];


var currentQuestion = 0

function showQuestion(currentQuestion) {

    currentQuestion = quizQuestions.question[1]
    quizContainer.innerHTML = currentQuestion;
    currentQuestion++;
}
showQuestion()




//set up question reel

//timer

//userresponse = correct answer, score goes up

//userresponse = incorre3ct answer, score goes down

//score stored in local memory on separate html page