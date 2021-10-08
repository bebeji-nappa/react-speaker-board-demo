import React from 'react'
import { MainTitle, MainContent, SectionTitle, Spacer, Layout, Theme } from 'react-speaker-board'
import "./Slide.css"
import GitHubLogo from "../images/github-logo.png"

const Subject = (
  <Theme themeColor="sky" textColor="white">
    <Layout layout="subject">
      <MainTitle textAlign="center">React Speaker Board</MainTitle>
      <Spacer />
      <MainContent textAlign="center">
        <span style={{ textAlign: "center" }}>
          Easily create presentation board using React.
        </span>
      </MainContent>
    </Layout>
  </Theme>
)

const Install = (
  <Theme themeColor="sky" textColor="white">
    <Layout layout="section">
      <Spacer />
      <Spacer />
      <Spacer />
      <MainTitle textAlign="center">Install</MainTitle>
      <Spacer />
      <MainContent textAlign="center" size="xxlarge">
        <Layout layout="subject">
          <code className="code">
          $ yarn add react-speaker-board
          </code>
        </Layout>
      </MainContent>
    </Layout>
  </Theme>
)

const Concept = (
  <Theme themeColor="sky" textColor="white">
    <Layout layout="section">
      <Spacer />
      <Spacer />
      <MainTitle textAlign="center">
        Concept
      </MainTitle>
      <Spacer />
      <Spacer />
      <MainContent textAlign="center">
        <MainContent textAlign="left" size="xlarge">
          <li className="list">Easy to make</li>
          <li className="list">Easy to customize</li>
          <li className="list">Abundant theme colors</li>
        </MainContent>
      </MainContent>
    </Layout>
  </Theme>
)

const Themes = (
  <Theme themeColor="sky" textColor="white">
    <Layout layout="subject">
      <MainTitle textAlign="center">
        Themes
      </MainTitle>
    </Layout>
  </Theme>
)

const Default = (
  <Theme themeColor="default" textColor="black">
    <Layout layout="section">
      <Spacer />
      <Spacer />
      <SectionTitle textAlign="center">
        Themes
      </SectionTitle>
      <Spacer />
      <Spacer />
      <MainContent textAlign="center" size="xxlarge">
        <Layout layout="subject">Default</Layout>
      </MainContent>
    </Layout>
  </Theme>
)

const Sunset = (
  <Theme themeColor="sunset" textColor="yellow">
    <Layout layout="section">
      <Spacer />
      <Spacer />
      <SectionTitle textAlign="center">
        Themes
      </SectionTitle>
      <Spacer />
      <Spacer />
      <MainContent textAlign="center" size="xxlarge">
        <Layout layout="subject">Sunset</Layout>
      </MainContent>
    </Layout>
  </Theme>
)

const Malinka = (
  <Theme themeColor="malinka" textColor="white">
    <Layout layout="section">
      <Spacer />
      <Spacer />
      <SectionTitle textAlign="center">
        Themes
      </SectionTitle>
      <Spacer />
      <Spacer />
      <MainContent textAlign="center" size="xxlarge">
        <Layout layout="subject">Malinka</Layout>
      </MainContent>
    </Layout>
  </Theme>
)

const Moon = (
  <Theme themeColor="moon" textColor="white">
    <Layout layout="section">
      <Spacer />
      <Spacer />
      <SectionTitle textAlign="center">
        Themes
      </SectionTitle>
      <Spacer />
      <Spacer />
      <MainContent textAlign="center" size="xxlarge">
        <Layout layout="subject">Moon</Layout>
      </MainContent>
    </Layout>
  </Theme>
)

const Darkblue = (
  <Theme themeColor="darkblue" textColor="white">
    <Layout layout="section">
      <Spacer />
      <Spacer />
      <SectionTitle textAlign="center">
        Themes
      </SectionTitle>
      <Spacer />
      <Spacer />
      <MainContent textAlign="center" size="xxlarge">
        <Layout layout="subject">Darkblue</Layout>
      </MainContent>
    </Layout>
  </Theme>
)

const Green = (
  <Theme themeColor="green" textColor="white">
    <Layout layout="section">
      <Spacer />
      <Spacer />
      <SectionTitle textAlign="center">
        Themes
      </SectionTitle>
      <Spacer />
      <Spacer />
      <MainContent textAlign="center" size="xxlarge">
        <Layout layout="subject">Green</Layout>
      </MainContent>
    </Layout>
  </Theme>
)

const Sky = (
  <Theme themeColor="sky" textColor="white">
    <Layout layout="section">
      <Spacer />
      <Spacer />
      <SectionTitle textAlign="center">
        Themes
      </SectionTitle>
      <Spacer />
      <Spacer />
      <MainContent textAlign="center" size="xxlarge">
        <Layout layout="subject">Sky</Layout>
      </MainContent>
    </Layout>
  </Theme>
)

const Dark = (
  <Theme themeColor="dark" textColor="white">
    <Layout layout="section">
      <Spacer />
      <Spacer />
      <SectionTitle textAlign="center">
        Themes
      </SectionTitle>
      <Spacer />
      <Spacer />
      <MainContent textAlign="center" size="xxlarge">
        <Layout layout="subject">Dark</Layout>
      </MainContent>
    </Layout>
  </Theme>
)

const Documentation = (
  <Theme themeColor="sky" textColor="white">
    <Layout layout="subject">
      <MainTitle textAlign="center">
        Let's use React Speaker Board!
      </MainTitle>
      <Spacer />
      <a href="https://github.com/bebeji-nappa/react-speaker-board" className="link">
        <div className="GitHub">
          <div className="logo"><img src={GitHubLogo} /></div>
          <span className="GitHub-text">GitHub Repository</span>
        </div>
      </a>
    </Layout>
  </Theme>
)

export const Slide = [
  Subject,
  Install,
  Concept,
  Themes,
  Default,
  Sunset,
  Malinka,
  Moon,
  Darkblue,
  Sky,
  Green,
  Dark,
  Documentation,
]
