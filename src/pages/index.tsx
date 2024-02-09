import { ReactSpeakerBoard } from "react-speaker-board"
import { Slide } from "../../slide/Slide";
import "../../styles/slide.css";

export default function Home () {
  return (
    <>
      <ReactSpeakerBoard slide={Slide} mode="slide" />
    </>
  )
};
