import React, { useState } from 'react';
import CardItem from './CardItem';

function CardManager()
{
    const [cards, setCards] = useState([
        {id: 1, title: 'Card 1', description: 'This is the first card'},
        {id: 2, title: 'Card 2', description: 'This is the second card'},
        {id: 3, title: 'Card 3', description: 'This is the third card'},
        {id: 4, title: 'Card 4', description: 'This is the fourth card'},
    ]);

    const [newCardTitle, setNewCardTitle] = useState('');
    const [newCardDescription, setNewCardDescription] = useState('');

    const [editingCardId, setEditingCardId] = useState(null);
    const [editingTitle, setEditingTitle] = useState('');
    const [editingDescription, setEditingDescription] = useState('');

    const handleAddCard = (e) => {
        e.preventDefault();
        const newCard = {
            id: cards.length + 1,
            title: newCardTitle,
            description: newCardDescription
        }

        setCards([...cards , newCard]);
        setNewCardTitle('');
        setNewCardDescription('');
    }

    const handleDeleteCard = (id) => {
        const updatedCards = cards.filter(card => card.id !== id);
        setCards(updatedCards);
    }

    const handleEditCard = (id, title, description) => {
        setEditingCardId(id);
        setEditingTitle(title);
        setEditingDescription(description);
    }

    const handleSaveCard = (id) => {
        const updatedCards = cards.map(card => {
            if (card.id === id) {
                return {
                    ...card,
                    title: editingTitle,
                    description: editingDescription
                };
            }
            return card;
        });

        setCards(updatedCards);
        setEditingCardId(null);
        setEditingTitle('');
        setEditingDescription('');
    }

    const handleCancelEdit = () => {
        setEditingCardId(null);
        setEditingTitle('');
        setEditingDescription('');
    }

    return (
        <div className='card p-4 m-3 shadow-lg mx-auto '>
            
            <h2 className='text-center mb-4'>Card Management</h2>

            <form className='mb-4 p-3 border rounded bg-light' onSubmit={handleAddCard}>
                <h4  className='mb-3'>Add New Card</h4>
                <div className='mb-3'>
                    <label htmlFor='cardTitle' className='form-label'>Card Title</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        id='cardTitle' 
                        value={newCardTitle} 
                        onChange={(e) => setNewCardTitle(e.target.value)} 
                        required 
                    />
                    </div>
                <div className='mb-3'>
                    <label htmlFor='cardDescription' className='form-label'>Card Description</label>
                    <textarea 
                        className='form-control' 
                        id='cardDescription' 
                        rows='3' 
                        value={newCardDescription} 
                        onChange={(e) => setNewCardDescription(e.target.value)} 
                        required >

                        </textarea>
                        </div>
                        
                <button type='submit' className='btn btn-primary'>Add Card</button>
            </form>

            <hr />

            <div className='d-flex flex-wrap justify-content-center'>
                {cards.map(card => (
                    <div className='' key={card.id}>
                        <CardItem 
                            key={card.id}
                            id={card.id}
                            title={card.title} 
                            description={card.description}
                            onDelete={handleDeleteCard}
                            onEdit={handleEditCard}
                            isEditing={editingCardId === card.id}
                            editedTitle={editingTitle}
                            onEditedTitleChange={(e) => setEditingTitle(e.target.value)}
                            editedDescription={editingDescription}
                            onEditedDescriptionChange={(e) => setEditingDescription(e.target.value)}
                            onSave={handleSaveCard}
                            onCancel={handleCancelEdit} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardManager;