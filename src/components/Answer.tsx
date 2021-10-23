import React from "react"

import styles from './Answer.module.scss'

interface Props {
  answer: any
}

const Answer = ({ answer }: Props): React.ReactElement => {
  
const answerLabel = Object.keys(answer)[0]

  return (
    <div className={styles.container}>
      <input type="radio" id={answerLabel} name={answerLabel} value={answerLabel}/>
      <label htmlFor={answerLabel} className={styles.label}>{answerLabel}</label>
    </div>
  )
}

export default Answer