import React from "react";

const Menu = ({ items }) => {
    return (
        <div className="menu--container">
            {items.map((item) => {
                const { id, title, img, desc, price } = item;
                return (
                    <article key={id} className="menu--item">
                        <img src={img} alt={title} className='item--img' />
                        <header className="item--info">
                            <h1 className="item--title">{title}</h1>
                            <h1 className="item--price">${price}</h1>
                        </header>
                        <hr />
                        <p className="item--desc">{desc}</p>
                    </article>
                )
            })}
        </div>
    )
}

export default Menu