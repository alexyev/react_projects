import React from 'react'
import './App.css'
import Tours from './Tours'

function App() {

  const [tours, setTours] = React.useState([])

  const removeTour = (id) => {
    let newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  React.useEffect(() => {
    fetch('https://course-api.com/react-tours-project')
      .then(res => res.json())
      .then(data => setTours(data))
  }, [])


  if (tours.length === 0) {
    return (
      <div className='app--no-tours-container'>
        <div className='app--no-tours'>No Tours Left! Refresh to view our offerings!</div>
      </div>
    )
  }

  return (
    <div className='app--container'>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  )

}

export default App
