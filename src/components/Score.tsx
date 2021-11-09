import React from 'react'

import styles from './Score.module.scss'

interface Props {
  userAnswers: any
}

const calcScore = (counter: number, length: number) => {
  if (counter > 0) {
    return Math.round(counter * 100 / length)
  }
  return 0
}
  
const Score = ({ userAnswers }: Props): React.ReactElement => {
  return (
    <div>
      <h1>Your score</h1>
      <h4>{`${userAnswers.score} out of ${userAnswers.results.length} questions (${calcScore(userAnswers.score, userAnswers.results.length)}%)`}</h4>
      <div className={styles.container}>
        {userAnswers.results.map((result: any) =>
          <div className={styles.resultBlock}>
            <p className={styles.question}>{result.question}</p>
            <div className={styles.answerContainer}>
              <span className={styles.answerLine}>{result.userAnswers}</span>
              {result.correctAnswer && <span className={styles.answerLine}>Correct answer: {result.correctAnswer}</span>}
            </div>
          </div>
          )}
      </div>
    </div>
  )
}

export default Score