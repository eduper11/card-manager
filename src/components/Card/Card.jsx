import React from 'react';
import IconButton from '../Buttons/IconButton/IconButton';

const Card = ({
    title,
    description,
    image,
    iconPrimary,
    iconPrimaryAction,
    iconSecondary,
    iconSecondaryAction,
}) => {
    const urlImage =
        image === ''
            ? 'https://andaluciaorienta.net/wp-content/themes/easymag-pro/images/no-image.png'
            : image;

    return (
        <div className='card'>
            <IconButton
                className='card__close'
                icon={iconPrimary}
                size='2rem'
                onClick={
                    iconPrimaryAction
                        ? () => {
                              iconPrimaryAction();
                          }
                        : () => {}
                }
            />
            <IconButton
                className='card__edit'
                icon={iconSecondary}
                onClick={
                    iconSecondaryAction
                        ? () => {
                              iconSecondaryAction();
                          }
                        : () => {}
                }
                size='2rem'
            />
            <div className='card__image' style={{ backgroundImage: `url(${urlImage})` }}></div>
            <h1 className='card__title'>{title}</h1>
            <div className='card__description'>
                <p className='card__description--text'>{description}</p>
            </div>
        </div>
    );
};

export default Card;
