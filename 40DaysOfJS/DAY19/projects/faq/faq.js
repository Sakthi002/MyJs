console.log("FAQs");

document.querySelector(".faq").addEventListener("click", (e) => {
    
    if(e.target.classList.contains('question')) {

        e.stopPropagation()

        const curretElem = e.target.parentElement;

        const currentAnswer = curretElem.querySelector(".answer");

        currentAnswer.classList.toggle("show");
    }
})


document.addEventListener("click", function(e) {

    const allAnswers = document.querySelectorAll(".answer.show");

    allAnswers.forEach(elem => {
        elem.classList.remove('show')
    })
})