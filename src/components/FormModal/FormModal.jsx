import React from 'react';
import InputText from '../Input/Input';
import ButtonPrimary from '../Buttons/ButtonPrimary/ButtonPrimary';
import IconButton from '../Buttons/IconButton/IconButton';

const FormModal = ({ closeButtonClick, onSubmit, submitButtonLabel, formTitle, formFields }) => {
    return (
        <div className='modal'>
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

export default FormModal;
