import React from 'react';

const AboutCardList = (props) => {
  const AboutCards = props.AboutCards;
  return (
    <div className="AboutCard-list">
      {AboutCards.map((AboutCard) => (
        <div className="AboutCard" key={AboutCard.id}>
          <h3>{AboutCard.title}</h3>
          <p>{AboutCard.content}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutCardList;



// const AboutCardList = (props) => {

//     const aboutCards = props.aboutCards

//     return (
//         <div className="aboutCard-list">
//             {aboutCards.map((aboutCard) => (
//                 <div className='aboutCard-preview' key={aboutCard.id}>
//                     <h1>{aboutCard.title}</h1>
//                     <p>{aboutCard.body}</p>    
//                 </div>
//             ))}
//         </div>
//     )

// }

// export default AboutCardList;