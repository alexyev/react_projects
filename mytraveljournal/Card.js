import React from 'react'

export default function Card (props) {
    return (
            <section className='card-container'>
                <div className='image-container'>
                    <img src={props.item.imageUrl} className='card-image'/>
                </div>
                <div className='text-container'>
                    <div className='info-container'>
                        <img src='../images/pinpoint.png' className='card-pinpoint' />
                        <h1 className='country-text'>{props.item.location}</h1>
                        <a className='maps-text' href={props.item.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1 className='card-title'>{props.item.title}</h1>
                    <h3 className='card-dates'>{props.item.startDate} - {props.item.endDate}</h3>
                    <p className='card-description'>{props.item.description}</p>
                </div>
            </section>
        )
}