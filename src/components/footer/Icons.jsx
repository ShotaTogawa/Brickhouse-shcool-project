import React from "react";

const Icons = ({ link,img }) => {
  return (
    <div>
      <a href={link} target="_blank"><img className="footer_icon_items" src={img} alt="social_icons"/></a>
    </div>
  );
};

export default Icons;