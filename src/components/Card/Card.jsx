import React from 'react';

const Card = ({ title, description, image }) => {
    return (
        <div className='card'>
            <div className='card__image' style={{ backgroundImage: `url(${image})` }}></div>
            <h1 className='card__title'>{title}</h1>
            <div className='card__description'>
                <p className='card__description--text'>{description}</p>
            </div>
        </div>
    );
};

export default Card;
