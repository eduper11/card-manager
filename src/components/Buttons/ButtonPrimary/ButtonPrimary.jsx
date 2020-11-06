import React from 'react';

const ButtonPrimary = ({ type, children, onClick }) => {
    return (
        <button
            className='buttonprimary'
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

export default ButtonPrimary;
