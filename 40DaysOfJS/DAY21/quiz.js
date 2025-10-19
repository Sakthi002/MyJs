let quizQuestions = [
     {
        question: "What does DOM stand for?",
        options: [
            "Document Order Model",
            "Document Object Model",
            "Data Object Method",
            "Direct Object Management"
        ],
        correct: 1
    },
    {
        question: "Which method selects by ID?",
        options: [
            "getElementById()",
            "querySelectorAll()",
            "getElement()",
            "getElementsByClassName()"
        ],
        correct: 0
    },
    {
        question: "Which event fires on input change?",
        options: ["click", "submit", "change", "keydown"],
        correct: 2
    }
]

let questions = [...quizQuestions].sort(()=> Math.random() - 0.5);

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 5;

let timeElem = document.getElementById("timer");
let questionElem = document.getElementById("question");
let optionsElem = document.getElementById("options");
let nextBtnElem = document.getElementById("next-btn");
let resultElem = document.getElementById("result");

function loadQuestion() {
    
    timeLeft = 5;

    timeElem.innerText = `⏱️ ${timeLeft}`

    clearInterval(timer);

    timer = setInterval(countdown, 1000);

    nextBtnElem.style.display = "none";

    optionsElem.innerHTML = "";

    questionElem.textContent = `${currentQuestion + 1}. ${questions[currentQuestion].question}`;

    questions[currentQuestion].options.forEach((elem, index) => {

        btnElem = document.createElement("button");
    
        btnElem.classList.add("option-btn");
    
        btnElem.textContent = elem;

        btnElem.addEventListener("click", () => selectAnswer(index))

         optionsElem.appendChild(btnElem);
    })
};

function countdown() {

    timeLeft--;

    timeElem.innerText = `⏱️ ${timeLeft}`

    if(timeLeft === 0) {

        clearInterval(timer);

        selectAnswer(questions[currentQuestion].correct, false)        
    }
}

function selectAnswer (index, shouldUpdate = true) {
    
    clearInterval(timer);

    let buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(btn => {
        btn.disabled = true;
    })

    if(index === questions[currentQuestion].correct) {

        buttons[index].classList.add("correct");

        if(shouldUpdate) {
            score++;
        }

    } else {

        buttons[index].classList.add("wrong");

        buttons[questions[currentQuestion].correct].classList.add("correct");
    }

    nextBtnElem.style.display = "inline-block";
}

nextBtnElem.addEventListener("click", function () {
    
    currentQuestion++;

    if(currentQuestion < questions.length) {
        
        loadQuestion();

    } else {
        
        showResult();
    }
})

function showResult() {

    questionElem.style.display = "none";
    optionsElem.style.display = "none";
    nextBtnElem.style.display = "none";
    timeElem.style.display = "none";

    let highScore = localStorage.getItem("highScore") || 0;

    let isNew = score > highScore;
console.log(localStorage.getItem("highScore"),isNew);

    if(isNew) {
        localStorage.setItem("highScore", score)
    }

    resultElem.innerHTML = `<h2>Hurray!!! Quiz Completed</h2>
      <p>You have scored ${score} out of ${questions.length} questions</p>
      <p>Highest Score: ${Math.max(score, highScore)}</P>
      ${isNew ? "<p>Hey, New High Score!</p>": ""}
      <button onclick="restartQuiz()">Restart Quiz</button>`
};

function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    questionElem.style.display = "block";

    optionsElem.style.display = "flex";

    nextBtnElem.style.display = "block";

    timeElem.style.display = "block";

    resultElem.innerHTML = "";

    loadQuestion()
}

loadQuestion();