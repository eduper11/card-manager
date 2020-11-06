import React, { useState } from 'react';
import Card from '../Card/Card';
import FormModal from '../FormModal/FormModal';
import Header from '../Header/Header';
import RoundButton from '../Buttons/RoundButton/RoundButton';

const Dashboard = () => {
    const [modalVisibility, setModalVisibility] = useState(false);
    const [cards, setCards] = useState([]);

    console.log('Cards', cards);

    const viewForm = () => {
        setModalVisibility(true);
    };

    const addCard = (content) => {
        console.log('addCard');
        setCards([...cards, content]);
    };

    const closeModal = () => {
        setModalVisibility(false);
    };

    return (
        <div className='dashboard'>
            <Header />
            <div className='cards__container'>
                {cards.length === 0 ? (
                    <div className='cards__container--nocard'>
                        <p className='message'>Ahora mismo no dispones de ninguna card</p>
                    </div>
                ) : (
                    cards.map((card, id) => (
                        <Card
                            key={id}
                            title={card.title}
                            description={card.description}
                            image={card.image}
                        />
                    ))
                )}
            </div>
            <RoundButton onClick={viewForm} />
            {modalVisibility ? <FormModal closeButtonClick={closeModal} onSubmit={addCard} /> : ''}
        </div>
    );
};

export default Dashboard;
