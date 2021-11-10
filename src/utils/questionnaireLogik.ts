const getEmptyArrayForUserAnswers = (length: number) => Array(length).fill(3)

const getAnalysedResults = (data: any, userAnswers: any) => {
  let scoreResults = { score: 0, results: [{ question: '', userAnswer: '', correctAnswer: '' }] }
  let scoreCounter = 0
    
  for (let questionIndex = 0; questionIndex < data.length; questionIndex++) {
    const userAnswerIndex = userAnswers[questionIndex]
    const currentQuestion = data[questionIndex]
    const userAnswerLabel = getUserAnswerLabel(currentQuestion.answers, userAnswerIndex)

    scoreResults.results[questionIndex] = ({ question: currentQuestion.question, userAnswer: userAnswerLabel, correctAnswer: '' })

    if (isUserAnswerTrue(currentQuestion.answers, userAnswerIndex)) {
      scoreCounter++
    } else {
      scoreResults.results[questionIndex].correctAnswer = getCorrectAnswerLabel(currentQuestion.answers)
    }
  }
  scoreResults.score = scoreCounter
  return scoreResults
}
  
const getCorrectAnswerLabel = (answers: any) => {
  let correctAnswer = ''
  answers.forEach((answer: any) => {
    if (answer.value) {
      correctAnswer = answer.label
    }
  })
  return correctAnswer
}

const isUserAnswerTrue = (answers: any, userAnswerIndex: number) => {
  return userAnswerIndex < 3 && answers[userAnswerIndex].value
}

const getUserAnswerLabel = (answers: any, userAnswerIndex: number) => {
  return userAnswerIndex < 3 ? answers[userAnswerIndex].label : 'Don`t know'
}

const calcScore = (counter: number, length: number) => {
  if (counter > 0) {
    return Math.round(counter * 100 / length)
  }
  return 0
}
  
const updateUserAnswers = (userAnswers: number[], answerIndex: number, questionIndex: number) => {
  const newAnswers = [...userAnswers]
  newAnswers[questionIndex] = answerIndex

  return newAnswers
}

const addAdditionalOptionToAnswers = (answers: any) => {
  return [...answers, { "label":'Don`t know', "value": false }]
}

export {
  getEmptyArrayForUserAnswers,
  getAnalysedResults,
  getCorrectAnswerLabel,
  isUserAnswerTrue,
  getUserAnswerLabel,
  calcScore,
  updateUserAnswers,
  addAdditionalOptionToAnswers
}