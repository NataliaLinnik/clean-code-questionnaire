import React from 'react'

interface Props {
  userAnswers: number[]
}

const Answers = ({ userAnswers }: Props): React.ReactElement => {
  return (
    <div>
      <h1>Answers</h1>
      <div>{[...userAnswers]}</div>
    </div>
  )
}

export default Answers