import React, { useState } from "react";

import logo from "../../img/brickhouse_logo.png";
import "./Navigation.scss";

const NavigationMobile = () => {

    return (
        <section className="navigation_container_mobile">
            <div className="navigation_wrapper">
                <div className="navigation_logo_main">
                    <img className="brand_logo" src={logo} alt="Brickhouse_Logo" />
                </div>
            </div>
        </section>
    );
}

export default NavigationMobile