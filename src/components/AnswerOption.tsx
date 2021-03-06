import React from "react"

import styles from './Answer.module.scss'

interface Props {
  key: string
  answerLabel: any
  answerIndex: number
  checked: boolean
  setCurrentAnswerIndex: (answerIndex: number) => void
}

const AnswerOption = ({ key, answerLabel, answerIndex, checked, setCurrentAnswerIndex }: Props): React.ReactElement => {
  return (
    <div className={styles.container}>
      <label htmlFor={answerLabel} className={styles.label}>
        <input
          type="radio"
          id={key}
          value={answerIndex}
          onChange={() => setCurrentAnswerIndex(answerIndex)}
          checked={checked} />
        {answerLabel}
      </label>
    </div>
  )
}

export default AnswerOption