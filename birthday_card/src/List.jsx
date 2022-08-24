import React from 'react'

const List = ({ people }) => {
    return (
        <div className='list--container'>
            <div className='list--inner--container'>
                {people.map((person) => {
                    const { id, name, age, image } = person;
                    return (
                        <article key={id} className='person'>
                            <img src={image} alt={name} className='images' />
                            <div className='list--info'>
                                <h4 className='list--name'>{name}</h4>
                                <p className='list--age'>{age} years</p>
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );
};

export default List;