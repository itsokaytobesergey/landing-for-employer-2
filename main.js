const questions = document.querySelectorAll(".faq__question")

const arrQuestions = Array.from(questions)

arrQuestions.forEach((question) => {
  question.addEventListener("click", (event) => {
    let nextAnswer = event.target.nextSibling.nextSibling
    nextAnswer.classList.toggle("is-hidden")
  })
})
