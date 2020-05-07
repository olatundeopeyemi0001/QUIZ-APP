<script type="text/javascript">
  const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
//create a text for startup
let shuffledQuestions, currentQuestionIndex

//event listeners

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

//showing results

    //  Quizquestions
const questions = [
  {
    question: "Ancient Greeks called it στέφανος, that can be translated as stéfanos. Ancient romans called it by a name which means crown. The X civica, or civic crown, was a garland of oak leaves granted by the Senate to someone whom they considered had saved the lives of fellow Roman citizens in battle. The civic crown also appears on the reverse of Augustan medallions. Its presence was a means of negotiating Augustus's unprecedented position. The origin of what word, which also refers to the outer atmosphere of the sun, are we describing here ?",
    answers: [
      { text: "A) Corona", correct: true },
      { text: "B) Wreath", correct: false },
      { text: "C) Tiara", correct: false},
      { text: "D) Aureole", correct: false},
    ]
  },
  {
    question: "While most companies are floundering, the shares of Zoom a company founded by Eric Yuan, has doubled over the last one month. So what does Zoom specialize in?",
    answers: [
      { text: 'A) Messenger and Meetings app', correct: true },
      { text: 'B) Mail App', correct: false },
      { text: 'C) Notes Taking App', correct: false },
      { text: 'D) VPN App', correct: false }
    ]
  },
  {
    question: "These are a series of Hotels opened up in collaboration with the Pestana group. They are present in Lisbon, Marakkech and Madeira. Recently as a temporary measure to counter Coronavirus the owner of these hotels has agreed to convert them into Hospitals to allow for isolation and treatment of patients. Who is this benevolent owner?",
    answers: [
      { text: 'A) Lionel Messi', correct: false },
      { text: 'B) Cristiano Ronaldo', correct: true },
      { text: 'C) Paul Pogba', correct: false },
      { text: 'D) David Beckham', correct: false }
    ]
  },
   {
    question: "Which billionaire has pledged to donate two million protective masks for distribution across Europe, with a first consignment arriving in Belgium late on Friday. He has also said he will donate 500,000 coronavirus testing kits and one million masks to the United States, while urging international cooperation to fight the health crisis.",
    answers: [
      { text: 'A) Jack MA', correct: true },
      { text: 'B) Poly Ma', correct: false },
      { text: 'C) Otedola', correct: false },
      { text: 'D) Dangote', correct: false }
    ]
  },
  {
    question: "This was a movie based on Richard Prestons 1992, New Yorker nonfiction article 'Crisis in the Hot Zone'. Its lead star Dustin Hoffmann had insisted that poet Maya Angelou be used to make the ending less depressing. (Little of her work is said to have been used). The movie was so effective that at an afterparty at Chasen's, one guest was overheard to remark: After seeing a movie like this, you kinda don't want to eat something that somebody else has touched. Which Movie?",
    answers: [
      { text: 'A) Contagion', correct: true },
      { text: 'B) Outbreak', correct: false },
      { text: 'C) Ebola', correct: false},
      { text: 'D Pandemic', correct: false}
    ]
  }
]

</script>