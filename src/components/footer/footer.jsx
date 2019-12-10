import React from "react";
import Icons from "./Icons.jsx";
import IMG1 from "../../img/linkedIn.png";
import LOGO from "../../img/brickhouse.png";

import './footer.scss';

const Footer = () => {
  return (
    <section className="footer_container">
      <img className="footer_logo" src={LOGO} alt="brickhouse_logo" />
      <div className="line_split"></div>
      <div className="footer_bottom">
        <p className="copy_right">&copy; Brickhouse Venture.2019. </p>
        <Icons img={IMG1} link="https://www.linkedin.com/company/brickhouse-ventures-corp/about/"/>
      </div>
    </section>
  );
};

export default Footer;
