import React from "react";
import "./Card.css";

const Card = ({ emoji, heading, detail, color }) => {
  return (
    <div className="card" style={{ borderColor: { color } }}>
      <img src={emoji} alt="" width="150px" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">Voir Plus</button>
    </div>
  );
};

export default Card;
