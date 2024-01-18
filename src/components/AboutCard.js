import React from 'react';

const AboutCardList = (props) => {
  const AboutCards = props.AboutCards;
  return (
    <div className="AboutCardList">  
      {AboutCards.map((AboutCard) => (
        // display flex row
        <div className="AboutCardContainer" key={AboutCard.id}>
          <h3>{AboutCard.title}</h3>
          <p>{AboutCard.content}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutCardList;

