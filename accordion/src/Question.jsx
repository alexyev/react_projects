import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

const Question = ({ title, info }) => {
    const [toggle, setToggle] = React.useState(false)

    return (
        <div className='question--container'>
            <div className='question--topbar'>
                <h1 className='question--title'>{title}</h1>
                <a className='question--btn' onClick={() => setToggle(!toggle)}>{toggle ? <FaMinus /> : <FaPlus />}</a>
            </div>
            <div className="question--info-container">
                {toggle && <p className='question--info'>{info}</p>}
            </div>
        </div>
    )
}

export default Question