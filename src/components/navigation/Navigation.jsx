import React, { useState, useEffect } from "react";
import useWindowScrollPosition from "@rehooks/window-scroll-position";

import logo from "../../img/brickhouse_hori.png";
import logo_sm from "../../img/brickhouse_2.png";
import navItems from "./NavItems";
import NavigationLinks from "./NavigationLinks";
import "./Navigation.scss";

const Navigation = ({cSection}) => {
    const [scrolling, setScrolling] = useState(false);
    const [navButtons, setNavButtons] = useState(navItems);
    
    useEffect(() => {
        const newNavButtons = navButtons.map(button => {
            button.id === cSection
                ? (button.isActive = true)
                : (button.isActive = false);
            return button;
        });

        setNavButtons(newNavButtons)
    }, [cSection]);

    //Y-coordinate when the sticky bar should appear
    const changePosition = 130;

    let position = useWindowScrollPosition();

    if (position.y > changePosition && !scrolling) {
        setScrolling(true);
    }

    if (position.y <= changePosition && scrolling) {
        setScrolling(false);

        //reset active state of buttons when on top
        const newNavButtons = navButtons.map(button => {
            button.isActive = false
            return button;
        });

        setNavButtons(newNavButtons)
    }

    const NavigationLinkOnScroll = () => {
        return (
            <>
                <a href="#hero"><img className="brand_logo" src={logo_sm} alt="Brickhouse_Logo" /></a>
                <div className="navigation_items">
                    <NavigationLinks btnObj={navButtons} buttonHandler={clickHandler} />
                </div>
            </>
        );
    }

    const clickHandler = (title) => {
        const newNavButtons = navButtons.map(button => {
            button.title === title
                ? (button.isActive = true)
                : (button.isActive = false);
            return button;
        });
        console.log(newNavButtons);

        setNavButtons(newNavButtons)
    }

    return (
        <>
            <div className={"navigation_on_scroll_wrapper" + (!scrolling ? " hidden" : "")}>
                <NavigationLinkOnScroll />
            </div>
            <section className="navigation_container">
                <div className="navigation_wrapper">
                    <div className="navigation_logo_main">
                        <a href="/">
                            <img className="brand_logo" src={logo} alt="Brickhouse_Logo" />
                        </a>
                    </div>
                    <div className="navigation_items">
                        <NavigationLinks btnObj={navButtons} buttonHandler={clickHandler} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Navigation;
