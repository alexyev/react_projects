import React from 'react'
import './App.css'
import data from './Data'
import Question from './Question'

function App() {

  const mappedQuestions = data.map((point) => {
    return <Question key={point.id} title={point.title} info={point.info} />
  })

  return (
    <div className="app--container">
      <h1 className='app--title'>Questions and Answers <br /> about Login</h1>
      <div className="app-question-container">
        {mappedQuestions}
      </div>
    </div>
  )
}

export default App
