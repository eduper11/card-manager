import React from 'react';

export const InputText = ({ name, placeholder, onChange, helpermessage, value }) => {
    return (
        <div className='input-text'>
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

export default InputText;
