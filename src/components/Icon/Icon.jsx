import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * className
     */
    className: PropTypes.string,
    /**
     * nombre del icono de la fuente, que será siempre con formato 'sga-icon-xxx'
     */
    iconName: PropTypes.string.isRequired,
    /**
     * tamaño (en rem) del icono
     */
    iconSize: PropTypes.string.isRequired,
};

const Icon = ({ className, iconName, iconSize }) => {
    return <div className={`${className || ''} ${iconName} `} style={{ fontSize: iconSize }}></div>;
};

Icon.propTypes = propTypes;

export default Icon;
