let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');
let previousButton = document.getElementById("previous");
let nextButton = document.getElementById("next");
let questionCard = document.querySelectorAll(".slide");
let currentQuestionCard = 0;

let quizQuestions = [
    {
        question1: "What is 10/2?",
        answers: {
            a: '3',
            b: '5',
            c: '115'
        },
        correctAnswer: 'b'
    },
    {
        question2: "What is 30/3?",
        answers: {
            a: '3',
            b: '5',
            c: '10'
        },
        correctAnswer: 'c'
    },
    {
        question3: "What is 30/3?",
        answers: {
            a: '3',
            b: '5',
            c: '10'
        },
        correctAnswer: 'c'
    },
    {
        question4: "What is 30/3?",
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

    currentQuestion = quizQuestions[0];
    quizContainer.innerHTML = currentQuestion;
    currentQuestion++;
}

showQuestion()



