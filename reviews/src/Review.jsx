import React from 'react'
import data from './Data'
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
    const [index, setIndex] = React.useState(0)
    const { name, job, image, text } = data[index]

    const checkNumber = (number) => {
        if (number > data.length - 1) {
            return 0
        }
        if (number < 0) {
            return data.length - 1
        }
        return number
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1
            return checkNumber(newIndex)
        })
    }

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1
            return checkNumber(newIndex)
        })
    }

    const randomPerson = () => {
        let newIndex = Math.floor(Math.random() * data.length)
        if (newIndex === index) {
            newIndex = index + 1
        }
        setIndex(checkNumber(newIndex))
    }

    return (
        <article>
            <div className="review--img-container">
                <img src={image} alt={name} />
            </div>
            <div className="review--info">
                <h1 className='review--name'>{name}</h1>
                <h2 className='review--job'>{job}</h2>
            </div>
            <div className="review--quote-container">
                <p className='review--quote'>{text}</p>
            </div>
            <div className="review--btn-container">
                <button className='review--prev' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className='review--next' onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className='review--random' onClick={randomPerson}>Surprise Me!</button>
        </article>
    )
}

export default Review