import React from 'react'
import Tour from './Tour'

export default function Tours({ tours, removeTour }) {
    return (
        <div className='tours--container'>
            <div className='tours--title'>Our Tours</div>
            <div className='tours--underline'></div>
            <div className='tours--list'>
                {tours.map((tour) => (
                    <Tour key={tour.id} {...tour} removeTour={removeTour} />
                ))}
            </div>
        </div>
    )
}