import React from "react";
import "./Control.css"
import NextIcon from "./images/next.svg";
import ProvIcon from "./images/prov.svg";

export const Control: React.VFC<Control> = ({ next, prov }) => {
  return (
    <div className="Control">
      <button onClick={prov}>
        <img src={ProvIcon} className="slide-button" />
      </button>
      <button onClick={next}>
      <img src={NextIcon} className="slide-button" />
      </button>
    </div>
  )
}
