import CardList from "./Card";
import React, { useState } from "react";

const Projects = () => {

    const [cards, setCards] = useState([
        { tools: 'some tools', title:'some title', body: 'some body'},
        { tools: 'some tools2', title:'some title2', body: 'some body2'},
        { tools: 'some tools3', title:'some title3', body: 'some body3'}
    ]);
    
    return (
        <div className="projects">
            <CardList cards={ cards } />
        </div>
    )
};

export default Projects;

