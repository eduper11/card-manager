import React from 'react';

export const InputText = ({ name, placeholder, onChange, helpermessage }) => {
    return (
        <div className='input-text'>
            <input
                className='input-text__box'
                type='text'
                name={name}
                placeholder={placeholder}
                onChange={onChange}
            />
            {helpermessage ? <p className='input-text__helpermessage'>{helpermessage}</p> : ''}
        </div>
    );
};

export default InputText;
