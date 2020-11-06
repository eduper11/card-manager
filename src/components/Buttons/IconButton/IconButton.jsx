import React from 'react';
import Icon from '../../Icon/Icon';

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

export default IconButton;
