import React from 'react';

const AboutCardList = (props) => {
  const AboutCards = props.AboutCards;
  return (
    <div className="AboutCardList">  
      {AboutCards.map((AboutCard) => (
        <div className="AboutCardContainer" key={AboutCard.id}>
          <h3>{AboutCard.title}</h3>
          <p>{AboutCard.content}</p>
          <button onClick={() => window.open(AboutCard.view, "_blank")}>
            More
          </button>
        </div>
      ))}
    </div>
  );
};
 
export default AboutCardList;

