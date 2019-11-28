import React from "react";

const NavigationLinks = ({ btnObj,buttonHandler }) => {
    return btnObj.map((item) => (
        <div className="navigation_item" key={item.id}>
            <a href={item.url} onClick={() => buttonHandler(item.id)} className={"btn" + (item.isActive ? " active" : "")}>
                {item.title}
            </a>
        </div>
    ));
};

export default NavigationLinks;