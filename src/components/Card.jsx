import React from "react";

const CardList = (props) => {
  const cards = props.cards;

  return (
    <div className="card-list">
      {cards.map((card) => (
        <div className="card-preview" key={card.id}>
          <p>{card.tools}</p>
          <h2>{card.title}</h2>
          <p>{card.body}</p>
          <button onClick={() => window.open(card.viewUrl, "_blank")}>
            View
          </button>
          <button onClick={() => window.open(card.githubUrl, "_blank")}>
            GitHub
          </button>
          <img src={card.image} alt={card.title} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
