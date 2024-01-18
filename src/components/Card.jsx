import React from 'react';

const CardList = (props) => {

    const cards = props.cards;

    return (
        <div className ="card-list">
            {cards.map((card) => (
                <div className="card-preview" key={card.id}>
                    <p>{card.tools}</p>
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                    {/* <button onClick={card.onViewClick}>View</button>
                    <button onClick={card.onGithubClick}>Github</button> */}
                </div>
            ))}
        </div>
    )
}

export default CardList;

