import React from "react";
import PricingCard from "./components/PricingCard";
import cardsData from "./cardsData";
import { useState } from "react";
import Popup from "./components/Popup";

export default function App() {
  const [popup, setPopup] = useState(null);

  return (
    <div className="app-wrapper">
      <Popup popup={popup} setPopup={setPopup} />
      <div className="card-wrapper">
        {cardsData.map((props) => {
          return (
            <PricingCard
              {...props}
              key={props.id}
              popup={popup}
              setPopup={setPopup}
            />
          );
        })}
      </div>
    </div>
  );
}
