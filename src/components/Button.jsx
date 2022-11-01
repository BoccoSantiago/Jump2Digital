import React from "react";

export default function Button({ btn, setPopup, popup }) {
  return (
    <button className="btn" onClick={() => setPopup(true)}>
      {btn}
    </button>
  );
}
