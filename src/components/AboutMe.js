import React from "react";
import AboutCardList from "./AboutCard";

const AboutMe = () => {
  const AboutCards = [
    { title: "UI/UX Designer", content: "I have a penchant for crafting sleek, professional, and modern looks that not only captivate users but also enhance their overall digital experience.", view: "https://github.com/dianalam122" },
    { title: "Face Painter", content: "A personal mission is to build inclusive experiences to bring face painting to everyone, including those who are young-at-heart.", view: "https://github.com/dianalam122" },
    
  ];

  return (
    <div className="aboutMe">
      <h1>
        About Me
      </h1>

      <p>
        Hello there, I'm Diana! A UI/UX designer, web developer, and entrepreneur -
      </p>

      <p>
        enrolled in the Honors Mathematics program at <b>the University of Waterloo</b>.
      </p>

      <p>
        I'm always on the lookout for opportunities to expand my skills and contribute to exciting projects. My goal is to bring a blend of analytical thinking from my mathematics background and creative flair from my design endeavors to create engaging and user-friendly web experiences.
      </p>

      <AboutCardList AboutCards={AboutCards} />
    </div>
  );
};

export default AboutMe;
