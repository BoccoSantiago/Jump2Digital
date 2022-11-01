import React from "react";

export default function Popup({ popup, setPopup }) {
  return (
    <div>
      {popup && (
        <div className="container">
          <div className="popup">
            <span className="close" onClick={() => setPopup(false)}>
              ✖
            </span>
            <form>
              <label htmlFor="email">
                Enter your email and we'll get in touch with you soon:
              </label>
              <input type="email" id="email" required />
              <input className="submit" type="submit" value="Send" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
