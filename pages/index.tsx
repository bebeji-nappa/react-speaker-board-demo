import { NextPage } from 'next'
import { ReactSpeakerBoard } from "react-speaker-board"
import { Slide } from "../slide/Slide"
import MetaData from '../src/components/head'
const Home: NextPage = () => {
  return (
    <>
      <MetaData />
      <ReactSpeakerBoard slide={Slide} mode="slide" />
    </>
  )
}

export default Home
