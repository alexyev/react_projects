import React from 'react'
import Header from './Header'
import Card from './Card'
import Data from './data'

export default function App () {
    const locations = Data.map(item => {
        return (
            <Card item={item} />
        )
    })
    
    return (
        <div className='app-container'>
            <Header/>
            {locations}
        </div>
    )
}