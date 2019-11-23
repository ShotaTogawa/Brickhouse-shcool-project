import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../img/brickhouse.png";

import "./Navigation.scss";

const Navigation = () => {

    const NavigationLink = ({ btnObj }) => {
        return btnObj.map((item) => (
            <div className="navigation_item" key={item.id}>
                <a href={item.url} className="btn">
                    {item.title}
                </a>
            </div>
        ));
    };

    const navButtons = [
        {
            id: 1,
            title: "ABOUT",
            isActive: false,
            url: "#about_container"
        },
        {
            id: 2,
            title: "TEAM",
            isActive: false,
            url: "#team_container"
        },
        {
            id: 3,
            title: "Press",
            isActive: false,
            url: "#press_container"
        },
        {
            id: 4,
            title: "Contact",
            isActive: false,
            url: "#contact_container"
        }
    ];

    return (
        <section className="navigation_container">
            <div className="navigation_wrapper">
            <div className="navigation_items">
                <NavigationLink btnObj={[navButtons[0], navButtons[1]]} />
            </div>
            <div className="navigation_logo_main">
                <a href="/">
                    <img className="brand_logo" src={logo} alt="Brickhouse_Logo" />
                </a>
            </div>
            <div className="navigation_items">
                <NavigationLink btnObj={[navButtons[2], navButtons[3]]} />
            </div>
            </div>
        </section>
    );
};

export default Navigation;
