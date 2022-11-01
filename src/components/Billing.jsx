import React from "react";

export default function Billing({ price, recurrency }) {
  return (
    <div className="card-billing">
      <p>
        <strong className="price">{price}</strong>
      </p>
      <p>per month</p>
    </div>
  );
}
