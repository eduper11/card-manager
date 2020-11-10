import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * className
     */
    className: PropTypes.string,
    /**
     * tipo del botón
     */
    type: PropTypes.string.isRequired,
    /**
     * acción que lanza el botón
     */
    onClick: PropTypes.func,
};

const ButtonPrimary = ({ className, type, children, onClick }) => {
    return (
        <button
            className={`buttonprimary ${className || ''}`}
            type={type}
            onClick={
                onClick
                    ? () => {
                          onClick();
                      }
                    : () => {}
            }
        >
            {children}
        </button>
    );
};

ButtonPrimary.propTypes = propTypes;

export default ButtonPrimary;
