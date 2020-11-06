import React from 'react';

const RoundButton = ({ onClick }) => {
    return (
        <button
            className='roundbutton'
            onClick={() => {
                onClick();
            }}
        >
            +
        </button>
    );
};

export default RoundButton;
