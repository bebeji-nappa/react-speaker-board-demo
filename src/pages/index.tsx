import { ReactSpeakerBoard } from "react-speaker-board"
import { Slide } from "../slide/Slide";

export default function Home () {
  return (
    <>
      <ReactSpeakerBoard slide={Slide} mode="slide" />
    </>
  )
};
