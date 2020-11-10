import React from 'react';
import Icon from '../../Icon/Icon';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * className
     */
    className: PropTypes.string,
    /**
     * acción que lanza el evento click
     */
    onClick: PropTypes.func,
    /**
     * nombre del icono, que siempre será de la forma 'sga-icon-xxx'
     */
    icon: PropTypes.string.isRequired,
    /**
     * tamaño (en rem) del icono
     */
    size: PropTypes.string.isRequired,
};

const IconButton = ({ className, onClick, icon, size }) => {
    return (
        <button
            className={`iconbutton ${className || ''}`}
            onClick={onClick ? () => onClick() : () => {}}
        >
            <Icon iconName={icon} iconSize={size} />
        </button>
    );
};

IconButton.propTypes = propTypes;

export default IconButton;
