import React from 'react'
import ReactDOM from 'react-dom'
import { ReactSpeakerBoard } from 'react-speaker-board'
import { Slide } from './Slide'
import "./reset.css"

ReactDOM.render(
  <ReactSpeakerBoard slide={Slide} mode="slide" />,
  document.getElementById('root')
);
