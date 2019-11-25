import React from "react";
import "./Card.scss";

const Card = (props) => {
    const {cards} = props
    return(
        <div className="about_cards_container">
            {
            cards.map(card => {
                return (
                    <div className="about_cards_card_container" key={card.id}>
                        <img className="about_card_img" src={card.img_url} alt="brickHouseVenture"/>
                        <h2 className="about_card_title">{card.title}</h2>
                        <p className="about_card_content">{card.description}</p>
                    </div>
                )
            })
            }
        </div>

    )
}

export default Card;