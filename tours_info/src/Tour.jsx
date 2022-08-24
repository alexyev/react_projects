import React from 'react'

export default function Tour({ id, name, info, image, price, removeTour }) {

    const [readMore, setReadMore] = React.useState(false)

    return (
        <div className='tour--container'>
            <img className='tour--image' src={image} />
            <div className='tour--information'>
                <div className='tour--topbar'>
                    <div className='tour--name'>{name}</div>
                    <div className='tour--price'>${price}</div>
                </div>
                <div className='tour--description'>
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button className='tour--read-more' onClick={() => setReadMore(!readMore)}>
                        {readMore ? '  show less' : '  show more'}
                    </button>
                </div>
            </div>
            <button
                onClick={() => removeTour(id)}
                className='tour--btn'>
                Not Interested
            </button>
        </div>
    )

}