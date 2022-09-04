import React from 'react'
import './App.css'
import Menu from './Menu'
import Categories from './Categories'
import Data from './Data'

const allCategories = ['all', ...new Set(Data.map((item) => item.category))]
console.log(allCategories)

function App() {

  const [items, setItems] = React.useState(Data)
  const [categories, setCategories] = React.useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setItems(Data)
      return
    }
    const newItems = Data.filter((item) => item.category === category)
    setItems(newItems)
  }

  return (
    <div className="app-container">
      <div className='app--title'>
        <h1>Our Menu.</h1>
        <div className='app--underline'></div>
      </div>
      <Categories filterItems={filterItems} categories={categories} />
      <Menu items={items} />
    </div>
  )
}

export default App
