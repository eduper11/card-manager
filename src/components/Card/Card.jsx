import React from 'react';
import IconButton from '../Buttons/IconButton/IconButton';

const Card = ({ title, description, image, removeCard }) => {
    return (
        <div className='card'>
            <IconButton
                icon='sga-icon-times'
                size='2rem'
                onClick={() => {
                    removeCard();
                }}
            />
            <div className='card__image' style={{ backgroundImage: `url(${image})` }}></div>
            <h1 className='card__title'>{title}</h1>
            <div className='card__description'>
                <p className='card__description--text'>{description}</p>
            </div>
        </div>
    );
};

export default Card;
