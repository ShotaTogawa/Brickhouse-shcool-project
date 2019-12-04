import React, { useState, useEffect } from "react";
import "./About.scss";
import Card from "./card/Card";
import Advicing from "../../img/About_Advicing.svg";
import Entertainment from "../../img/About_Entertainment.svg";
import BestTeam from "../../img/About_Best_Team.svg";
import Marketing from "../../img/About_Marketing.svg";


const About = ({ onChange, inView }) => {

    function onChange (isVisible) {
        console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
    }

    console.log("Can you see me? ",onChange)
    useEffect(() => {
        onChange ? inView("101") : inView();
    }, [onChange]);

    const [cards, setCards] = useState(
        [
            {
                id: 0,
                img_url: Advicing,
                title: "ADVICING",
                description: "Technology companies with evidence of consumer demand and competitive advantage"
            },
            {
                id: 1,
                img_url: Entertainment,
                title: "ENTERTAINMENT",
                description: "Technology plays in esports, sports tech and entertainment tech",
            },
            {
                id: 2,
                img_url: BestTeam,
                title: "BEST TEAM",
                description: "Strong experienced management team with compelling company vision",
            },
            {
                id: 3,
                img_url: Marketing,
                title: "MARKETING",
                description: "Scalable and replicable models that are globally relevant across cultures and languages"
            }
        ]
    )

    return (
        <section className="about_container" id="about">
            <h1 id="about_title" className="about_title">WHAT WE DO</h1>
            <Card cards={cards} />
        </section>
    )
}

export default About;