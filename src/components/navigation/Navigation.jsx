import React, { useState }  from "react";
import useWindowScrollPosition from "@rehooks/window-scroll-position";

import logo from "../../img/brickhouse.png";
import "./Navigation.scss";

const Navigation = () => {
    const [scrolling, setScrolling] = useState(false);
    const changePosition = 1;
  
    let position = useWindowScrollPosition();
  
    if (position.y > changePosition && !scrolling) {
        setScrolling(true);
    }
  
    if (position.y <= changePosition && scrolling) {
        setScrolling(false);
    }

    const NavigationLinkOnScroll = () =>{
        return (
            <div className="navigation_on_scroll_wrapper">
                <h1>Logo</h1>
                <div className="navigation_items"><NavigationLink btnObj={navButtons} /></div>
            </div>
        );
      }

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
            url: "#about"
        },
        {
            id: 2,
            title: "TEAM",
            isActive: false,
            url: "#team"
        },
        {
            id: 3,
            title: "PRESS",
            isActive: false,
            url: "#press"
        },
        {
            id: 4,
            title: "CONTACT",
            isActive: false,
            url: "#contact"
        }
    ];

    if(scrolling){
        return <NavigationLinkOnScroll />
    }

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
