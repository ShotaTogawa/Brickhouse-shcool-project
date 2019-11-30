import React from "react";

const Title = ({ img, text }) => {
  return (
    <div className="contact_title">
      <img src={img} alt="contact_title_logo" />
      <p>{text}</p>
    </div>
  );
};

export default Title;
