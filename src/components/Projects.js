import CardList from "./Card";
import React, { useState } from "react";

const Projects = () => {
  const [cards, setCards] = useState([
    {
      tools: "Figma, JavaScript, Velo by Wix, DeSo",
      title: "ENFT - Winner at GoldenHacks 4.0",
      body: "Won 'Top 5 Business Solutions', 'Technical Demo', and 'Best Use of Velo by Wix' out of 43 teams at GoldenHacks 4.0 by working with three colleagues to develop a web app that incentivizes environmental volunteering through NFTs",
      viewUrl: "https://github.com/dianalam122",
      githubUrl: "https://github.com/dianalam122",
      image: "https://placehold.co/60x40",
    },
    {
      tools: "Figma, ReactJS, JavaScript, HTML/CSS",
      title: "MyAI",
      body: "Built a chatbox to provide 1:1 conversation that provides emotional support and advice for youth.",
      viewUrl: "https://github.com/dianalam122",
      githubUrl: "https://github.com/dianalam122",
      image: "https://placehold.co/60x40",
    },
    {
      tools: "Figma, React Native, JavaScript, MongoDB, HTML/CSS",
      title: "BizFund",
      body: "Developed a mobile app to reinvent small business sustainability to help raise capital through blockchain technology to support the backbone of our economy.",
      viewUrl: "https://github.com/dianalam122",
      githubUrl: "https://github.com/dianalam122",
      image: "https://placehold.co/60x40",
    },
  ]);

  return ( 
    <div className="projects">
      <h1 className="title">Projects</h1>
      <CardList cards={cards} />
    </div>
  );
};

export default Projects;
