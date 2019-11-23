import React from "react";
import "./Press.scss";

const Press = ({ press }) => {
  console.log(press);
  return (
    <div className="card">
      <img src={press.image} class="card-image" />
      <ul className="card-list">
        <li>{press.category}</li>
        <li>{press.date}</li>
      </ul>
      <h2 className="card-title">{press.title}</h2>
      <p className="card-body">{press.body}</p>
    </div>
  );
};

export default Press;
