import CardList from "./Card";
import React, { useState } from "react";

const Projects = () => {
  const [cards, setCards] = useState([
    {
      tools: "some tools",
      title: "some title",
      body: "some body",
      viewUrl: "https://github.com/dianalam122",
      githubUrl: "https://github.com/dianalam122",
      image: "https://placehold.co/60x40",
    },
    {
      tools: "some tools2",
      title: "some title2",
      body: "some body2",
      viewUrl: "https://github.com/dianalam122",
      githubUrl: "https://github.com/dianalam122",
      image: "https://placehold.co/60x40",
    },
    {
      tools: "some tools3",
      title: "some title3",
      body: "some body3",
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
