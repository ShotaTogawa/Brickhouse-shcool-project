import React, { useState } from "react";

import logo from "../../img/brickhouse_logo.png";
import "./Navigation.scss";
import "./NavigationMobile.scss";


const NavigationMobile = () => {
    const [navButtons, setNavButtons] = useState([
        {
            id: 1,
            title: "ABOUT",
            isActive: false,
            url: "#about"
        },
        {
            id: 2,
            title: "PARTNERS",
            isActive: false,
            url: "#partners"
        },
        {
            id: 3,
            title: "ADVISORS",
            isActive: false,
            url: "#advisors"
        },
        {
            id: 4,
            title: "PRESS",
            isActive: false,
            url: "#press"
        },
        {
            id: 5,
            title: "CONTACT",
            isActive: false,
            url: "#contact"
        }
    ]);

    const clickHandler = () =>{
        document.body.classList.toggle('open')
    }

    const navClickHandler = (id) => {
        const newNavButtons = navButtons.map(button => {
            button.id === id
                ? (button.isActive = true)
                : (button.isActive = false);
            return button;
        });

        setNavButtons(newNavButtons);
        document.body.classList.remove('open');
    }

    return (
        <>
            <button onClick={clickHandler} class="menu-toggle"></button>
            <nav>
                <ul class="menu">
                    {navButtons.map((item) => (
                        <li className="navigation_item" key={item.id}>
                            <a href={item.url} onClick={() => navClickHandler(item.id)} className={"btn" + (item.isActive ? " active" : "")}>
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <section className="navigation_container_mobile">
                <div className="navigation_wrapper">
                    <div className="navigation_logo_main">
                        <img className="brand_logo" src={logo} alt="Brickhouse_Logo" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default NavigationMobile