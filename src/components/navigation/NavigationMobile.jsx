import React, { useState } from "react";

import logo from "../../img/brickhouse_logo.png";
import navItems from "./NavItems";
import "./Navigation.scss";
import "./NavigationMobile.scss";


const NavigationMobile = () => {
    const [navButtons, setNavButtons] = useState(navItems);

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
            <button onClick={clickHandler} class="menu_toggle"></button>
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