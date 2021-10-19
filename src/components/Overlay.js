import React from "react";

export default function Overlay({ toggleOverlay }) {
  return (
    <div className="overlay">
      <div className="modal_window">
        <h4>Thank you</h4>
        <p>Lorem ipsum dolor senectus</p>
        <a className="modal_btn" href="/#" onClick={toggleOverlay}>
          Ok
        </a>
      </div>
    </div>
  );
}
