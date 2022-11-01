import React from "react";

export default function Features({ data }) {
  return (
    <div className="card-features">
      <ul>
        {data.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
