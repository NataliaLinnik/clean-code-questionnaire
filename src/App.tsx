import { useEffect, useState } from "react";

import logo from './logo.png';
import DATA from "./assets/questionnaire.json"

import Questionnaire from "./components/Questionnaire";
import Score from "./components/Score";

import { getAnalysedResults, getEmptyArrayForUserAnswers, updateUserAnswers } from "./utils/questionnaireLogik";

import './App.css';

const App = () => {
  const [userAnswers, setUserAnswers] = useState<number[]>([])
  const [showAnswers, setShowAnswers] = useState(false)
  
  useEffect(() => {
    const emptyUserArray = getEmptyArrayForUserAnswers(DATA.length)
    setUserAnswers(emptyUserArray)
  }, [])

  const refreshUserAnswer = (questionIndex: number, answerIndex: number) => {
    setUserAnswers(updateUserAnswers(userAnswers, answerIndex, questionIndex))
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!showAnswers ?
          <Questionnaire
            data={DATA}
            setShowAnswers={() => setShowAnswers(true)}
            userAnswers={userAnswers}
            refreshUserAnswer={refreshUserAnswer}
            /> :
          <Score userAnswers={getAnalysedResults(DATA, userAnswers)}/>}
      </header>
    </div>
  )
}

export default App;
