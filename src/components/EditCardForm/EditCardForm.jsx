import React, { useState } from 'react';
import FormModal from '../FormModal/FormModal';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * className
     */
    className: PropTypes.string,
    /**
     * acción que lanza el botón de cerrar
     */
    closeButtonClick: PropTypes.func.isRequired,
    /**
     * acción de setear enviar info del form
     */
    onSubmit: PropTypes.func.isRequired,
    /**
     * información de la carta que se quiere editar
     */
    card: PropTypes.object.isRequired,
};

const EditCardForm = ({ closeButtonClick, submitChanges, card }) => {
    const [form, setForm] = useState(card);
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

        const { title, description } = form;

        if (title.trim() !== '' && description.trim() !== '') {
            submitChanges(form);
            closeButtonClick();
        } else if (title.trim() === '') {
            setError({
                ...error,
                title: true,
            });
        } else {
            setError({
                ...error,
                description: true,
            });
        }
    };

    return (
        <FormModal
            closeButtonClick={closeButtonClick}
            formTitle='Modifica tu tarjeta'
            submitButtonLabel='Guardar'
            onSubmit={submitCard}
            formFields={[
                {
                    name: 'title',
                    placeholder: 'Título',
                    onChange: handleChange,
                    helpermessage: error.title ? 'El título no puede estar vacío' : '',
                    value: form.title,
                },
                {
                    name: 'description',
                    placeholder: 'Descripción',
                    onChange: handleChange,
                    helpermessage: error.description ? 'La descripción no puede estar vacía' : '',
                    value: form.description,
                },
                {
                    name: 'image',
                    placeholder: 'Imagen (Url)',
                    onChange: handleChange,
                    helpermessage: error.image ? 'La url de la imagen no es correcta' : '',
                    value: form.image,
                },
            ]}
        />
    );
};

EditCardForm.propTypes = propTypes;

export default EditCardForm;
