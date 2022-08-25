import React from 'react'
import './App.css'
import Review from './Review'

function App() {

  return (
    <div className="app--container">
      <h1 className='app--title'>Our Reviews</h1>
      <div className="app--underline"></div>
      <Review />
    </div>
  )
}

export default App
