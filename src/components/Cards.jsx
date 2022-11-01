import React from "react";
import Description from "./Description";
import Billing from "./Billing";
import Action from "./Action";
import Features from "./Features";
import cardsData from "./data";

export default function Cards() {
  return (
    <div className={`card pricing-card ${type}`}>
      {mostPopular ? <span className="most-popular">Most Popular</span> : null}
      <Description
        title={cardsData.title}
        description={cardsData.description}
      />
      <Billing price={cardsData.price} recurrency={cardsData.recurrency} />
      <Features data={cardsData.data} />
      <Action clickMe={clickMe} />
    </div>
  );
}
