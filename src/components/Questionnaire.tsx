import React from 'react'
import QuestionBlock from "./QuestionBlock"

import DATA from "../assets/questionnaire.json"

import styles from './Questionnaire.module.scss'

const Questionnaire = (): React.ReactElement => {
  return <div>
    <h1>Questionnaire</h1>
    {DATA.map((questionData) => <QuestionBlock questionData={questionData}/>)}
    <button className={styles.checkButton}>check my answers</button>
  </div>
}

export default Questionnaire