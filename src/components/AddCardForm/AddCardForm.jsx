import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import FormModal from '../FormModal/FormModal';

const AddCardForm = ({ closeButtonClick, onSubmit }) => {
    const [form, setForm] = useState({
        title: '',
        description: '',
        image: '',
    });
    const [error, setError] = useState({
        title: false,
        description: false,
        image: false,
    });

    const imageRegexp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;

    //función que comprueba si el campo está vacío, y de ser así, setea el error
    const getErrorByEmpty = (value, name) => {
        if (value === '' || value.trim() === '') {
            setError({
                ...error,
                [name]: true,
            });
        } else {
            setError({
                ...error,
                [name]: false,
            });
        }
    };

    //función que comprueba la validez de la url de la imagen, y de no ser válida, setea error
    const getErrorUrl = (value, name) => {
        if (!value.match(imageRegexp)) {
            setError({
                ...error,
                [name]: true,
            });
        } else {
            setError({
                ...error,
                [name]: false,
            });
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });

        //comprobamos si el campo es de image, y si no está vacío
        if (name === 'image' && value !== '') {
            getErrorUrl(value, name);
        }
        //comprobamos que el campo no sea image (porque si image )
        else if (name !== 'image') {
            getErrorByEmpty(value, name);
        }
        //última opción, si es campo imagen, y está vacío, seteamos error a false
        else {
            setError({
                ...error,
                image: false,
            });
        }
    };

    const submitCard = (e) => {
        e.preventDefault();

        //nos tremos el state actual
        const { title, description, image } = form;

        //Comprobación del form
        if (title.trim() !== '' && description.trim() !== '' && image.match(imageRegexp)) {
            form.id = uuid();
            form.date = Date();
            onSubmit(form);
            setForm({
                title: '',
                description: '',
                image: '',
            });
            closeButtonClick();
        } else {
            // comprobación de cada posibilidad de estado del formulario
            if (title.trim() === '' && description.trim() === '' && !image.match(imageRegexp)) {
                setError({ title: true, description: true, image: true });
            } else if (title.trim() === '' && description.trim() === '') {
                setError({
                    ...error,
                    title: true,
                    description: true,
                });
            } else if (title.trim() === '' && !image.match(imageRegexp)) {
                setError({
                    ...error,
                    title: true,
                    image: true,
                });
            } else if (description.trim() === '' && !image.match(imageRegexp)) {
                setError({
                    ...error,
                    description: true,
                    image: true,
                });
            } else if (title.trim() === '') {
                setError({
                    ...error,
                    title: true,
                });
            } else if (description.trim() === '') {
                setError({
                    ...error,
                    description: true,
                });
            } else if (!image.match(imageRegexp)) {
                setError({
                    ...error,
                    image: true,
                });
            }
        }
    };

    return (
        <FormModal
            closeButtonClick={closeButtonClick}
            formTitle='Agrega tu tarjeta'
            submitButtonLabel='Añadir tarjeta'
            onSubmit={submitCard}
            formFields={[
                {
                    name: 'title',
                    placeholder: 'Título',
                    onChange: handleChange,
                    helpermessage: error.title ? 'El título no puede estar vacío' : '',
                },
                {
                    name: 'description',
                    placeholder: 'Descripción',
                    onChange: handleChange,
                    helpermessage: error.description ? 'La descripción no puede estar vacía' : '',
                },
                {
                    name: 'image',
                    placeholder: 'Imagen (Url)',
                    onChange: handleChange,
                    helpermessage: error.image ? 'La url de la imagen no es correcta' : '',
                },
            ]}
        />
    );
};

export default AddCardForm;