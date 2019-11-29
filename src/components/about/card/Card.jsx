import React from "react";
import "./Card.scss";
import { Controller, Scene } from "react-scrollmagic";

const Card = (props) => {
    const {cards} = props
    return(
        <div className="about_cards_container">
            {
            cards.map(card => {
                return (
                    <Controller key={card.id}>
                        <Scene
                            triggerElement= "#about_title"
                            triggerHook= "0.7"
                            classToggle= {['.about_cards_card_container', 'animateIn']}
                            indicators
                        >
                            <div className="about_cards_card_container">
                                <img className="about_card_img" src={card.img_url} alt="brickHouseVenture"/>
                                <h2 className="about_card_title">{card.title}</h2>
                                <p className="about_card_content">{card.description}</p>
                            </div>
                        </Scene>
                    </Controller>
                )
            })
            }
        </div>

    )
}

export default Card;