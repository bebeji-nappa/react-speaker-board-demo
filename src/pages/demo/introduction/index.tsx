import { NextPage } from 'next'
import { ReactSpeakerBoard } from "react-speaker-board"
import { Slide } from "../../../../slide/demo/Slide"

const Demo: NextPage = () => {
  return <ReactSpeakerBoard slide={Slide} mode="slide" />
}

export default Demo
