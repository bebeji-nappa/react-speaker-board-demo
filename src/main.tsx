import React from 'react'
import ReactDOM from 'react-dom'
import { ReactSpeakerBoard } from './slideboard'
import { Slide } from './slide'
import "./reset.css"

ReactDOM.render(
  <ReactSpeakerBoard slide={Slide} />,
  document.getElementById('root')
);
