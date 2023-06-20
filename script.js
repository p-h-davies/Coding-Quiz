let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');
let previousButton = document.getElementById("previous");
let nextButton = document.getElementById("next");
let questionCard = document.querySelectorAll(".slide");
let currentQuestionCard = 0;

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



function displayQuiz() {

    const output = [];

    quizQuestions.forEach((questions, questionNumber) => {

        const answers = [];

        for (options in questions.answers) {
            answers.push(
                `<label> <input type="radio" name="question${questionNumber}" value="options">

           ${questions.answers[options]}
          </label>`
            );
        }
        output.push(
            `<div class="slide">
    <div class="question"> ${questions.question} </div>
    <div class="answers"> ${answers.join("")} </div>
  </div>`
        );
    }
    );
    quizContainer.innerHTML = output.join('');
}
displayQuiz()



nextButton.addeventlistener("click", function () {
    showQuestion(quizQuestions + 1)
});

previousButton.addeventlistener("click", function () {
    showQuestion(quizQuestions - 1)
});














