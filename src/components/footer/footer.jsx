import React from "react";
import Icons from "./Icons.jsx";
import IMG1 from "../../img/facebook2.png";
import IMG2 from "../../img/linkedIn.png";
import IMG3 from "../../img/twitter-sign2.png";
import LOGO from "../../img/brickhouse.png";

import './footer.scss';

const Footer = () => {
  return (
    <section className="footer_container">
      <img className="footer_logo" src={LOGO} alt="brickhouse_logo" />
      <div className="line_split"></div>
      <div className="footer_icons">
        <Icons img={IMG1} link="http://www.twitter.com/"/>
        <Icons img={IMG2} link="#"/>
        <Icons img={IMG3} link="#" />
      </div>
      <p className="copy_right">&copy; Brickhouse Venture.2019. </p>
    </section>
  );
};

export default Footer;
