import React from 'react';

const Icon = ({ className, iconName, iconSize }) => {
    return <div className={`${className || ''} ${iconName} `} style={{ fontSize: iconSize }}></div>;
};

export default Icon;
