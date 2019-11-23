import React from "react";
import "./Press.scss";

const countBodyNum = body => {
  console.log(body.length);
  if (body.length >= 140) {
    return body.slice(0, 140) + "...";
  }
  return body;
};

const Press = ({ press }) => {
  return (
    <div className="card">
      <img src={press.image} className="card-image" />
      <ul className="card-list">
        <li>{press.category}</li>
        <li>{press.date}</li>
      </ul>
      <h2 className="card-title">{press.title}</h2>
      <p className="card-body">{countBodyNum(press.body)}</p>
      <div className="card-author">
        <img src={press.avatar} className="card-avatar" alt={press.author} />
        <ul className="card-author-info">
          <li>{press.company}</li>
          <li>{press.author}</li>
        </ul>
      </div>
    </div>
  );
};

export default Press;
