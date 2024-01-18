import React from "react";

const CardList = (props) => {
  const cards = props.cards;

  return (
    <div className="card-list">
      {cards.map((card) => (
        // display flex row
        <div className="cardlistContainer" key={card.id}>
          <div class="projText"> 
            <p>{card.tools}</p>
            <h2>{card.title}</h2>
            <p>{card.body}</p>
            <div className="projBtn">
              <button onClick={() => window.open(card.viewUrl, "_blank")}>
                View
              </button>
              <button onClick={() => window.open(card.githubUrl, "_blank")}>
                GitHub
              </button>
            </div>
          </div>
          <img src={card.image} alt={card.title} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
