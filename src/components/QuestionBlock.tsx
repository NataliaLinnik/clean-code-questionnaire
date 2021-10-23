import React from "react"
import Answer from "./Answer"

import styles from './QuestionBlock.module.scss'

interface Props {
  questionData: any
}

const QuestionBlock = ({questionData}: Props): React.ReactElement => {
  return (
    <div className={styles.container}>
      <p className={styles.question}>{questionData.question}</p>
      <div>
        {questionData.answers.map((answer: any) => <Answer answer={answer}/>)}
      </div>
    </div>
  )
}

export default QuestionBlock