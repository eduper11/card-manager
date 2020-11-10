import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     *className
     */
    className: PropTypes.string,
    /**
     * acción que lanza el evento click
     */
    onClick: PropTypes.func,
};

const RoundButton = ({ className, onClick }) => {
    return (
        <button
            className={`roundbutton ${className || ''}`}
            onClick={
                onClick
                    ? () => {
                          onClick();
                      }
                    : () => {}
            }
        >
            +
        </button>
    );
};

RoundButton.propTypes = propTypes;

export default RoundButton;
