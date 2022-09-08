import { useState, useEffect } from 'react'
import './App.scss'
import Data from './Data'

function App() {

  const [text, setText] = useState([])
  const [count, setCount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1
    }
    if (count > 8) {
      amount = 8
    }
    setText(Data.slice(0, amount))
  }

  return (
    <div className="app--container">
      <h1 className='title'>Tired of Boring Lorem Ipsum?</h1>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>
          paragraphs:
        </label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)} />
        <button type='submit' className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, idx) => {
          return (
            <p key={idx}>
              {item}
            </p>
          )
        })}
      </article>
    </div>
  )
}

export default App
