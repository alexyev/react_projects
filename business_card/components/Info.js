import React from 'react'

export default function Info () {
    return (
    <div className='info-container'>
        <img className='image' src='./images/headshot.jpg' />
        <h1 className='info--name'>Alexander Yevchenko</h1>
        <h2 className='info--title'>Frontend Developer</h2>
        <h3 className='info--website'>alexyev.github.io</h3>
        <form className='btn-container'>
            <a href='mailto:alexanderyevchenko@gmail.com' target='_blank'><button className='btn-email'>Email</button></a>
            <a href='https://www.linkedin.com/in/alexander-yevchenko-1334291b3/' target='_blank'>
            <button className='btn-linkedin'>LinkedIn</button></a>
        </form>
    </div>
    )
}