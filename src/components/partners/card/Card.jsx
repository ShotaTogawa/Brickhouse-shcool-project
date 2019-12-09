import React from "react";
import "./Card.scss";

const Card = (props) => {
    const { cards } = props;
    return (
        <div className="partners_cards_container">
            { cards.map( card => {
                return(
                <div key={card.id} className={card.id % 2 === 1 ? "partners_cards_card_container even" : "partners_cards_card_container"}>
                    <div className={card.id % 2 === 1 ? "partners_cards_card_left_container even" : "partners_cards_card_left_container"}>
                        <div className="partners_cards_card_picture" style={{backgroundImage: `url(${card.img_url})`}}></div>
                    </div>
                    <div className="partners_cards_card_right_container">
                        <div className="partners_cards_card_firstRow_container">
                            <h1 className="partners_cards_card_name">{card.name}</h1>
                            <div className="partners_cards_card_decorationWhite"></div>
                            <h2 className="partners_cards_card_city">{card.city}</h2>
                        </div>
                        <div className="partners_cards_card_secondRow_container">
                            <h1 className="partners_cards_card_number">{card.number}</h1>
                            <div className="partners_cards_card_decorationBlue"></div>
                            <h2 className="partners_cards_card_email">{card.email}</h2>
                        </div>
                        <p className="partners_cards_card_content">
                        {card.description}
                        </p>
                    </div>
                </div>
                )
             })
            }   
        </div>
    )
}

export default Card;