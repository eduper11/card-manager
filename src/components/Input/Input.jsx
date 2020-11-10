import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * className
     */
    className: PropTypes.string,
    /**
     * nombre del campo
     */
    name: PropTypes.string.isRequired,
    /**
     * placeholder del campo
     */
    placeholder: PropTypes.string,
    /**
     * acción que se lanza cuando el campo detecta cualquier cambio en su contenido
     */
    onChange: PropTypes.func.isRequired,
    /**
     * mensaje de ayuda del campo
     */
    helpermessage: PropTypes.string,
    /**
     * valor del campo
     */
    value: PropTypes.string,
};

const InputText = ({ className, name, placeholder, onChange, helpermessage, value }) => {
    return (
        <div className={`input-text ${className || ''}`}>
            <input
                className='input-text__box'
                type='text'
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            {helpermessage ? <p className='input-text__helpermessage'>{helpermessage}</p> : ''}
        </div>
    );
};

InputText.propTypes = propTypes;

export default InputText;
