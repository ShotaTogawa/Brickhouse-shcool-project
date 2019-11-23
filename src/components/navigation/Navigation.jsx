import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navigation.scss";

const Navigation = () => {

    const NavigationLink = ({ btnObj }) => {
        return btnObj.map((item) => (
          <div key={item.id}>
            <NavLink to={item.url} className="btn" activeClassName={item.active}>
              {item.title}
            </NavLink>
          </div>
        ));
      };

    const navButtons = [
        {
            id: 1,
            title: "ABOUT",
            active: "active",
            url: "#about_container"
        },
        {
            id: 2,
            title: "TEAM",
            active: "active",
            url: "#team_container"
        },
        {
            id: 3,
            title: "Press",
            active: "active",
            url: "#press_container"
        },
        {
            id: 4,
            title: "Contact",
            active: "active",
            url: "#contact_container"
        }
    ];

    return (
        <section className="navigation_container">
            <div className="navigation_items_left">
                <NavigationLink btnObj={ [navButtons[0],navButtons[1]] } />
            </div>
            <div className="navigation_logo_main"></div>
            <div className="navigation_items_right">
                <a href="#press_container">PRESS</a>
                <a href="#contact_container">CONTACT</a>
            </div>
        </section>
    );
};

export default Navigation;
