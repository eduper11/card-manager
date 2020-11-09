import React, { useState } from 'react';
import Icon from '../Icon/Icon';

const Orderer = ({ orderOptions, selectedOption }) => {
    const [selectVisibility, setSelectVisibility] = useState(false);

    return (
        <div className='orderer'>
            <div
                className={`orderer__selected ${selectVisibility ? 'focus' : ''}`}
                onClick={() => setSelectVisibility(!selectVisibility)}
            >
                {selectedOption}
                <Icon
                    className={`${selectVisibility ? 'opened' : ''}`}
                    iconName='sga-icon-caret-filled-down'
                />
            </div>
            <div className={`orderer__options-container ${selectVisibility ? 'visible' : ''}`}>
                {orderOptions.map((option, id) => {
                    return (
                        <div
                            key={id}
                            className='orderer__option'
                            onClick={() => {
                                option.action(option.name);
                                setSelectVisibility(!selectVisibility);
                            }}
                        >
                            {option.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Orderer;
