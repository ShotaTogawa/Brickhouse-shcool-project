import React from "react";

const Title = ({ img, text }) => {
  return (
    <div className="title">
      <img className="title-logo" src={img} />
      <p>{text}</p>
    </div>
  );
};

export default Title;
