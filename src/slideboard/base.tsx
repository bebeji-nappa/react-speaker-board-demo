import React, { useState, useEffect, useCallback } from "react";
import "./types"
import "./base.css"
import { Control } from "./Control";

export const ReactSpeakerBoard:React.VFC<SpeakerBoard> = ({ slide }) => {
  const [view, setView] = useState<JSX.Element>(slide[0]);
  const [index, setIndex] = useState<Number>(0);
  const max = slide.length - 1;

  const NextSlide = () => {
    if (index !== max) {
      let num = Number(index)
      setIndex(Number(num + 1))
    }
  }
  
  const ProvSlide = () => {
    if (index !== 0) {
      let num = Number(index)
      setIndex(Number(num - 1))
    }
  }

  useEffect(() => {
    setView(slide[Number(index)])
  }, [index])

  return (
    <div className="wrapper">
      {view}
      <Control next={() => NextSlide()} prov={() => ProvSlide()} />
    </div>
  )
}
