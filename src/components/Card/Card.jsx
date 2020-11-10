import React from 'react';
import IconButton from '../Buttons/IconButton/IconButton';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * className
     */
    className: PropTypes.string,
    /**
     * título de la card
     */
    title: PropTypes.string.isRequired,
    /**
     * descripción de la card
     */
    description: PropTypes.string.isRequired,
    /**
     * url de la image de la card
     */
    url: PropTypes.string,
    /**
     * icono a mostrar en la posición primaria
     */
    iconPrimary: PropTypes.string.isRequired,
    /**
     * acción que lanza el evento click en el botón primario
     */
    iconPrimaryAction: PropTypes.func,
    /**
     * icono a mostrar en la posición secundaria
     */
    iconSecondary: PropTypes.string.isRequired,
    /**
     * acción que lanza el evento click en el botón secundario
     */
    iconSecondaryAction: PropTypes.func,
};

const Card = ({
    className,
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
        <div className={`card ${className || ''}`}>
            {iconPrimary ? (
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
            ) : (
                ''
            )}
            {iconSecondary ? (
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
            ) : (
                ''
            )}
            <div className='card__image' style={{ backgroundImage: `url(${urlImage})` }}></div>
            <h1 className='card__title'>{title}</h1>
            <div className='card__description'>
                <p className='card__description--text'>{description}</p>
            </div>
        </div>
    );
};

Card.propTypes = propTypes;

export default Card;
