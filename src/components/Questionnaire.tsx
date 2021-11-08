import React from 'react'
import QuestionBlock from "./QuestionBlock"
import styles from './Questionnaire.module.scss'

type Props = {
  data: any[]
  userAnswers: number[]
  setShowAnswers: () => void
  refreshUserAnswer: (index: number, answer: number) => void
}

const Questionnaire = ({ data, userAnswers, setShowAnswers, refreshUserAnswer }: Props): React.ReactElement => {
  return (
    <div>
      <h1>Questionnaire</h1>
      <form onSubmit={setShowAnswers}>
        {data.map((questionData, questionIndex) =>
          <QuestionBlock
            key={questionIndex}
            questionData={questionData}
            userAnswer={userAnswers[questionIndex]}
            refreshUserAnswer={(answerIndex: number) => refreshUserAnswer(questionIndex, answerIndex)}
          />)}
        <button className={styles.checkButton} type="submit">check my answers</button>
      </form>
    </div>
  )
}

export default Questionnaire