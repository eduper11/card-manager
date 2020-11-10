import React, { useState } from 'react';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * className
     */
    className: PropTypes.string,
    /**
     * opciones de ordenación
     */
    orderOptions: PropTypes.arrayOf(
        PropTypes.shape({
            /**
             * nombre de la opción
             */
            name: PropTypes.string.isRequired,
            /**
             * acción que lanza el evento click en esa opción
             */
            action: PropTypes.func.isRequired,
        }),
    ),
    /**
     * opción que aparece como seleccionada
     */
    selectedOption: PropTypes.string.isRequired,
};

const Orderer = ({ className, orderOptions, selectedOption }) => {
    const [selectVisibility, setSelectVisibility] = useState(false);

    return (
        <div className={`orderer ${className || ''}`}>
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

Orderer.propTypes = propTypes;

export default Orderer;
