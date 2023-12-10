import React from "react";
import "./Offers.css";
import exclusive_image from '../Assets/exclusive_image.png'

export const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Эксклюзив</h1>
        <h1>Предложение для вас</h1>
        <p>только лучшие товары-бестселлеры</p>
        <button>Проверь сейчас</button>
      </div>

      <div className="offers-right">
        <img src={exclusive_image} alt="exclusive_image" />
      </div>
    </div>
  );
};
