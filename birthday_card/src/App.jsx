import { useState } from 'react'
import { data } from './Data'
import List from './List'
import './App.css'

function App() {
  const [people, setPeople] = useState(data)

  function clearPeople() {
    setPeople([])
  }

  return (
    <div className="App">
      <h2 className='app--title'>There are {people.length} birthdays today!</h2>
      <List people={people} className='app--list' />
      <button onClick={clearPeople} className='app--button'>Finished Celebrating!</button>
    </div>
  )
}

export default App
