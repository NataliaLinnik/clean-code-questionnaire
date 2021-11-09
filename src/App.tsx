import { useEffect, useState } from "react";

import logo from './logo.png';
import DATA from "./assets/questionnaire.json"

import Questionnaire from "./components/Questionnaire";
import Score from "./components/Score";

import { getEmptyArrayForUserAnswers } from "./utils/questionnaireLogik";

import './App.css';

const App = () => {
  const [userAnswers, setUserAnswers] = useState<number[]>([])
  const [showAnswers, setShowAnswers] = useState(false)
  
  useEffect(() => {
    const emptyUserArray = getEmptyArrayForUserAnswers(DATA.length)
    setUserAnswers(emptyUserArray)
  }, [])

  const refreshUserAnswer = (index: number, answer: number) => {
    const newAnswers = [...userAnswers]
    newAnswers[index] = answer
    setUserAnswers(newAnswers)
  }

  const getAnalysedResults = () => {
    let scoreResults = { score: 0, results: [{ question: '', userAnswers: '', correctAnswer: '' }] }
    let rightAnswersCounter = 0
    for (let questionIndex = 0; questionIndex < DATA.length; questionIndex++) {
      const userAnswerIndex = userAnswers[questionIndex]
      const currentQuestion = DATA[questionIndex]
      const userAnswerLabel = userAnswerIndex < 3 ? currentQuestion.answers[userAnswerIndex].label : 'Don`t know'
      if (userAnswerIndex < 3 && currentQuestion.answers[userAnswerIndex].value) {
        scoreResults.results[questionIndex] = ({ question: currentQuestion.question, userAnswers: `Your answer '${userAnswerLabel}' is correct`, correctAnswer: '' })
        rightAnswersCounter++
      } else {
        let correctAnswer = ''
        currentQuestion.answers.forEach((answer: any) => {
          const answerKey = answer.label
          if (answer.value) {
            correctAnswer = answerKey
          }
        });
        scoreResults.results[questionIndex] = ({ question: currentQuestion.question, userAnswers: `Your answer '${userAnswerLabel}' is wrong`, correctAnswer: correctAnswer })
      }
    }
    scoreResults.score = rightAnswersCounter
    return scoreResults
  }



  console.log(getAnalysedResults())
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!showAnswers ?
          <Questionnaire
            data={DATA}
            setShowAnswers={() => setShowAnswers(true)}
            userAnswers={userAnswers}
            refreshUserAnswer={refreshUserAnswer} /> :
          <Score userAnswers={getAnalysedResults()}/>}
      </header>
    </div>
  )
}

export default App;
