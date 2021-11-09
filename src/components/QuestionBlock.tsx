import React, { useEffect, useState } from "react"
import AnswerOption from "./AnswerOption"

import styles from './QuestionBlock.module.scss'

interface Props {
  questionData: any
  userAnswer: number
  refreshUserAnswer: (answerIndex: number) => void
}

const QuestionBlock = ({ questionData, userAnswer, refreshUserAnswer }: Props): React.ReactElement => {
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState<number>(userAnswer)
  const [answers, setAnswers] = useState(questionData.answers)

  useEffect(() => {
    setAnswers([...answers, { "label":'Don`t know', "value": false }])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  useEffect(() => {
    setCurrentAnswerIndex(userAnswer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAnswer])

  useEffect(() => {
    refreshUserAnswer(currentAnswerIndex)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentAnswerIndex])
  
  return (
    <div className={styles.container}>
      <p className={styles.question}>{questionData.question}</p>
      <div>
        {answers.map((answer: any, index: number) =>
          <AnswerOption
            key={index+questionData.question} 
            answerLabel={answer.label}
            answerIndex={index}
            checked={index === currentAnswerIndex}
            setCurrentAnswerIndex={setCurrentAnswerIndex}
            />)}
      </div>
    </div>
  )
}

export default QuestionBlock