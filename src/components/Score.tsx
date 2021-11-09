import React from 'react'
import { calcScore } from "../utils/questionnaireLogik"

import styles from './Score.module.scss'

interface Props {
  userAnswers: any
}

const Score = ({ userAnswers }: Props): React.ReactElement => {

  const getUserAnswerString = (result: any) => {
    if (result.correctAnswer) {
      return `Your answer '${result.userAnswer}' is wrong`
    }
    return `Your answer '${result.userAnswer}' is correct`
  }

  return (
    <div>
      <h1>Your score</h1>
      <h4>{`${userAnswers.score} out of ${userAnswers.results.length} questions (${calcScore(userAnswers.score, userAnswers.results.length)}%)`}</h4>
      <div className={styles.container}>
        {userAnswers.results.map((result: any) =>
          <div className={styles.resultBlock}>
            <p className={styles.question}>{result.question}</p>
            <div className={styles.answerContainer}>
              <span className={styles.answerLine}>{getUserAnswerString(result)}</span>
              {result.correctAnswer && <span className={styles.answerLine}>Correct answer: {result.correctAnswer}</span>}
            </div>
          </div>
          )}
      </div>
    </div>
  )
}

export default Score