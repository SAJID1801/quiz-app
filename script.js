const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

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

const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'Who is the best YouTuber?',
    answers: [
      { text: 'Web Dev Simplified', correct: true },
      { text: 'Traversy Media', correct: true },
      { text: 'Dev Ed', correct: true },
      { text: 'Fun Fun Function', correct: true }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  },
  {
    question: 'Which one of following is flightless bird?',
     answers:[
    { text:  'swan', correct:false },
    { text:  'hen', correct:false },
    { text:  'duck', correct:false },
    { text:  'emu', correct:true }
     ]
    },
    {
  question: 'Which country is the largest producer of platinum?',

  answers:
  [
  { text:  'America', correct:false },
  { text:  'Italy', correct:false },
  { text:  'Canada', correct:true },
  { text:  'China', correct:false }
  ]
},
{
question: 'Which one of the following is known as the roof of the world?',

answers:
[
  { text:  'the Pamir plateau', correct:true },
  { text:  'alps', correct:false },
  { text:  'Ural mountain', correct:false },
  { text:  'andes', correct:false }
]
},
{
question: 'Day of Happiness is celebrated on',
answers:
[
  { text:  '11-Jun', correct:false },
  { text:  '20-Mar', correct:true },
  { text:  '22-Oct', correct:false },
{ text:  '25-Apr', correct:false }
]
},
{

question: 'Alexandria is the famous sea port of',
answers:
[
  { text:  'Iran', correct:false },
{ text:  'Egypt', correct:true },
{ text:  'Turkey', correct:false },
{ text:  'Syria', correct:false }
]
  },
  {

  
  question: 'Which alloy is used in making of magnets?',

  answers:
  [
  { text: 'nickel hydride',correct:false},
{ text: 'iron oxide', correct:false },
{ text: 'gold oxide', correct:false},
{ text: 'alnico', correct:true }
  ]
},
{
question: 'Lake Lucerne that has complicated shape with several sharp bends and four arms is located in',
 answers:
 [
{ text:  'Syria', correct:false },
{ text:  'Switzerland', correct:true },
{ text:  'Turkey', correct:false },
{ text:  'Iran', correct:false }
 ]
},
{
question: 'The penne palace, a UNESCO world heritage site is located in',
answers:
[
{ text:  'Turkey', correct:false },
{ text:  'Portugal', correct:true },
{ text:  'Syria', correct:false },
{ text:  'Iran', correct:false }

]
},
{
question: 'Which one of the following is inexhaustible natural resource of the Earth?',

answers:
[
{ text:  'Oil', correct:false },
{ text:  'air', correct:true },
{ text:  'water', correct:false },
{ text:  'soil', correct:false }
]
},
{
question: 'Which one of the following county has highest population density?',
 answers:
 [
  { text: 'China',correct:false},
{ text: 'India', correct:false },
{ text: 'Russia', correct:false },
{ text: 'Monaco', correct:true }
 ]
  }
]