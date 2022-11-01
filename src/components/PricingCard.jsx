import React from "react";
import Description from "./Description";
import Billing from "./Billing";
import Button from "./Button";
import Features from "./Features";
import "../index.css";

export default function PricingCard(props) {
  const { type, title, description, price, img, data, btn, setPopup } = props;

  return (
    <div className={`card pricing-card ${type}`}>
      <div className="img-wrapper">
        <img src={img} />
      </div>
      <Description title={title} description={description} />
      <Billing price={price} />
      <Features data={data} />
      <Button btn={btn} setPopup={setPopup} />
    </div>
  );
}
