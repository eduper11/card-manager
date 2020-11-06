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

    const removeCard = (id) => {
        console.log('removeCard');
        const newCardsArray = cards.filter((card) => card.id !== id);

        setCards(newCardsArray);
    };

    const closeModal = () => {
        setModalVisibility(false);
    };

    return (
        <div className='dashboard'>
            <Header />
            <div className='main'>
                {cards.length === 0 ? (
                    <div className='main__nocards'>
                        <p className='message'>Ahora mismo no dispones de ninguna card</p>
                    </div>
                ) : (
                    <div className='main__container-cards'>
                        {cards.map((card, id) => (
                            <Card
                                key={id}
                                id={card.id}
                                title={card.title}
                                description={card.description}
                                image={card.image}
                                removeCard={() => {
                                    removeCard(card.id);
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>
            <RoundButton onClick={viewForm} />
            {modalVisibility ? <FormModal closeButtonClick={closeModal} onSubmit={addCard} /> : ''}
        </div>
    );
};

export default Dashboard;
