import React from "react";
import LemonDesertImg from "../assets/lemon dessert.jpg";
import GreekSaladImg from "../assets/greek salad.jpg";
import "./css/Specials.css";

export default function Specials() {
  return (
    <section className="specials">
      <div className="specials-intro">
        <h2>Specials</h2>
        <button role="button">Online Menu</button>
      </div>
      <div className="cards-container">
        {/* store them in list and do a map function */}
        <div className="card">
          <img src={GreekSaladImg} />
          <div className="card-content">
            <div className="card-intro">
              <h1>Greek Salad</h1>
              <p>$12.99</p>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos eum incidunt nemo minima commodi eius.
            </p>
            <a href="#">Order a Delivery</a>
          </div>
        </div>
        <div className="card">
          <img src={GreekSaladImg} />
          <div className="card-content">
            <div className="card-intro">
              <h1>Greek Salad</h1>
              <p>$12.99</p>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos eum incidunt nemo minima commodi eius.
            </p>
            <a href="#">Order a Delivery</a>
          </div>
        </div>
        <div className="card">
          <img src={GreekSaladImg} />
          <div className="card-content">
            <div className="card-intro">
              <h1>Greek Salad</h1>
              <p>$12.99</p>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos eum incidunt nemo minima commodi eius.
            </p>
            <a href="#">Order a Delivery</a>
          </div>
        </div>
      </div>
    </section>
  );
}
