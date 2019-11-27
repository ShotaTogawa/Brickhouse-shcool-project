import React, { useState } from "react";
import useWindowScrollPosition from "@rehooks/window-scroll-position";

import logo from "../../img/brickhouse_hori.png";
import logo_sm from "../../img/brickhouse_2.png";
import "./Navigation.scss";

const Navigation = () => {
    const [scrolling, setScrolling] = useState(false);
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
                    <NavigationLink btnObj={navButtons} />
                </div>
            </>
        );
    }

    const NavigationLink = ({ btnObj }) => {
        return btnObj.map((item) => (
            <div className="navigation_item" key={item.id}>
                <a href={item.url} onClick={() => clickHandler(item.id)} className={"btn" + (item.isActive ? " active" : "")}>
                    {item.title}
                </a>
            </div>
        ));
    };

    const clickHandler = (id) =>{
        const newNavButtons = navButtons.map(button => {
            button.id === id
              ? (button.isActive = true)
              : (button.isActive = false);
            return button;
          });

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
                        <NavigationLink btnObj={navButtons} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Navigation;
