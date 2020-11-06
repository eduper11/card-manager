import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import ButtonPrimary from '../Buttons/ButtonPrimary/ButtonPrimary';
import IconButton from '../Buttons/IconButton/IconButton';
import InputText from '../Input/Input';

const FormModal = ({ closeButtonClick, onSubmit }) => {
    const [form, setForm] = useState({
        title: '',
        description: '',
        image: '',
    });
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const submitCard = (e) => {
        e.preventDefault();

        const { title, description, image } = form;
        const imageRegexp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;

        //Comprobación del form
        if (title.trim() !== '' && description.trim() !== '' && image.match(imageRegexp)) {
            form.id = uuid();
            onSubmit(form);
            setError(false);
            setForm({
                title: '',
                description: '',
                image: '',
            });
            closeButtonClick();
        } else {
            setError(true);
        }
    };

    return (
        <div className='modal'>
            <div className='form-container'>
                <IconButton onClick={closeButtonClick} icon='sga-icon-times' size='2.5rem' />
                {error ? <p>Error</p> : ''}
                <h1 className='form-title'>Agrega tu tarjeta</h1>
                <form className='form' onSubmit={submitCard}>
                    <InputText name='title' placeholder='Título' onChange={handleChange} />
                    <InputText
                        name='description'
                        placeholder='Descripción'
                        onChange={handleChange}
                        helpermessage='patatín'
                    />
                    <InputText name='image' placeholder='Imagen (Url)' onChange={handleChange} />
                    <ButtonPrimary type='submit'>Añadir Card</ButtonPrimary>
                </form>
            </div>
        </div>
    );
};

export default FormModal;
