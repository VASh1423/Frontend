import React, { useEffect, useState } from 'react'

export default function Quiz({data, setTimeOut, questionNumber, setQuestionNumber}) {
  const [question, setQuestion] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [className, setClassNamer] = useState('answer')

  useEffect(() => {
    setQuestion(data[questionNumber-1])
  }, [data, questionNumber])

  const handleClick = (a) => {
    setSelectedAnswer(a)
    setClassNamer('answer active')
  }

  return (
    <div className='quiz'>
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map(a => (
          <div className={selectedAnswer === a ? className : "answer"} onClick={() => handleClick(a)}>{a.text}</div>
        ))}
      </div>
    </div>
  )
}
