import React, { Fragment, useState } from 'react';
import Card from '../Card/Card';
import AddCardForm from '../AddCardForm/AddCardForm';
import Header from '../Header/Header';
import RoundButton from '../Buttons/RoundButton/RoundButton';
import Orderer from '../Orderer/Orderer';
import {
    compareTitleAsc,
    compareTitleDes,
    compareDateAsc,
    compareDateDes,
} from '../../helpers/helpers';
import EditCardForm from '../EditCardForm/EditCardForm';

const Dashboard = () => {
    const [addCardFormVisibility, setAddCardFormVisibility] = useState(false);
    const [editCard, setEditCard] = useState({});
    const [cards, setCards] = useState([]);
    const [orderBy, setOrderBy] = useState('Ordenar por');

    console.log('Cards', cards);
    console.log('editCard', editCard);

    const viewAddCard = () => {
        setAddCardFormVisibility(true);
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

    const saveCard = (content) => {
        const { id, title, description, image } = content;

        // const newCardsArray = cards.filter((card) => card.id !== content.id);
        // newCardsArray.push(content);
        // setCards(newCardsArray);

        setCards(
            cards.map((card) => {
                return card.id === id
                    ? {
                          ...card,
                          title,
                          description,
                          image,
                      }
                    : card;
            }),
        );
    };

    const viewEditCard = (card) => {
        console.log('card', card);
        setEditCard(card);
    };

    const setOrderCards = (order) => {
        setOrderBy(order);

        const cardsObj = cards;

        switch (order) {
            case 'Nombre asc':
                cardsObj.sort(compareTitleAsc);
                return cardsObj;
            case 'Nombre desc':
                cardsObj.sort(compareTitleDes);
                return cardsObj;
            case 'Fecha asc':
                cardsObj.sort(compareDateAsc);
                return cardsObj;
            case 'Fecha desc':
                cardsObj.sort(compareDateDes);
                return cardsObj;
            default:
        }
    };

    const closeModal = () => {
        setAddCardFormVisibility(false);
        setEditCard({});
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
                    <Fragment>
                        <div className='main__orderer-container'>
                            <Orderer
                                selectedOption={orderBy}
                                orderOptions={[
                                    { name: 'Nombre asc', action: setOrderCards },
                                    { name: 'Nombre desc', action: setOrderCards },
                                    { name: 'Fecha asc', action: setOrderCards },
                                    { name: 'Fecha desc', action: setOrderCards },
                                ]}
                            />
                        </div>
                        <div className='main__container-cards'>
                            {cards.map((card, id) => (
                                <Card
                                    key={id}
                                    title={card.title}
                                    description={card.description}
                                    image={card.image}
                                    iconPrimary='sga-icon-times'
                                    iconPrimaryAction={() => {
                                        removeCard(card.id);
                                    }}
                                    iconSecondary='sga-icon-pencil-alt'
                                    iconSecondaryAction={() => {
                                        viewEditCard(card);
                                    }}
                                />
                            ))}
                        </div>
                    </Fragment>
                )}
            </div>
            <RoundButton onClick={viewAddCard} />
            {addCardFormVisibility ? (
                <AddCardForm closeButtonClick={closeModal} onSubmit={addCard} />
            ) : (
                ''
            )}
            {Object.keys(editCard).length > 0 ? (
                <EditCardForm
                    closeButtonClick={closeModal}
                    submitChanges={saveCard}
                    card={editCard}
                />
            ) : (
                ''
            )}
        </div>
    );
};

export default Dashboard;
