import React from 'react';
import InputText from '../Input/Input';
import ButtonPrimary from '../Buttons/ButtonPrimary/ButtonPrimary';
import IconButton from '../Buttons/IconButton/IconButton';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * className
     */
    className: PropTypes.string,
    /**
     * acción para el botón cerrar
     */
    closeButtonClick: PropTypes.func.isRequired,
    /**
     * función submit del formulario
     */
    onSubmit: PropTypes.func.isRequired,
    /**
     * label del botón del formulario
     */
    submitButtonLabel: PropTypes.string.isRequired,
    /**
     * título del formulario
     */
    formTitle: PropTypes.string.isRequired,
    /**
     * campos que se quieren añadir al formulario (inputText)
     */
    formFields: PropTypes.arrayOf(
        PropTypes.shape({
            /**
             * nombre del campo
             */
            name: PropTypes.string.isRequired,
            /**
             * placeholder del campo
             */
            placeholder: PropTypes.string,
            /**
             * acción que se lanza cuando el campo detecta un cambio en su contenido
             */
            onChange: PropTypes.func,
            /**
             * mensaje de ayuda del campo
             */
            helpermessage: PropTypes.string,
            /**
             * valor del campo
             */
            value: PropTypes.string,
        }),
    ),
};

const FormModal = ({
    className,
    closeButtonClick,
    onSubmit,
    submitButtonLabel,
    formTitle,
    formFields,
}) => {
    return (
        <div className={`modal ${className}`}>
            <div className='form-container'>
                <IconButton
                    onClick={() => closeButtonClick()}
                    icon='sga-icon-times'
                    size='2.5rem'
                />
                <h1 className='form-title'>{formTitle}</h1>
                <form className='form' onSubmit={onSubmit}>
                    {formFields.map((field, i) => {
                        return (
                            <InputText
                                key={i}
                                name={field.name}
                                placeholder={field.placeholder}
                                onChange={field.onChange}
                                helpermessage={field.helpermessage || ''}
                                value={field.value}
                            />
                        );
                    })}
                    <ButtonPrimary type='submit'>{submitButtonLabel}</ButtonPrimary>
                </form>
            </div>
        </div>
    );
};

FormModal.propTypes = propTypes;

export default FormModal;
