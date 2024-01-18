import React from "react";
import AboutCardList from "./AboutCard";

const AboutMe = () => {
  const AboutCards = [
    { title: "title1", content: "content1" },
    { title: "title2", content: "content2" },
  ];

  return (
    <div >
      <h1>Im diana</h1>
      <p>I attend the university of waterloo...</p>
      <AboutCardList AboutCards={AboutCards} />
    </div>
  );
};

export default AboutMe;
