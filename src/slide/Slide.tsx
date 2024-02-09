import { Title, Text, Content, Spacer, Layout, Theme, TriangleRight, Square, Circle } from 'react-speaker-board';
import Link from 'next/link'

const Subject = () => {
  return (
    <Theme themeColor="sky" textColor="white">
      <Layout layout="subject">
        <Title textAlign="center">React Speaker Board</Title>
        <Spacer />
        <Content horizontal="center">
          <Text textAlign="center">Easily create presentation board using React.</Text>
        </Content>
      </Layout>
    </Theme>
  )
}

const Install = () => {
  return (
    <Theme themeColor="sky" textColor="white">
      <Layout layout="section">
        <Spacer />
        <Spacer />
        <Spacer />
        <Title textAlign="center">Install</Title>
        <Spacer />
        <Content horizontal="center" textSize="xxlarge">
          <Layout layout="subject">
            <code className="slide-code">
            $ yarn add react-speaker-board
            </code>
          </Layout>
        </Content>
      </Layout>
    </Theme>
  )
}

const Concept = () => {
  return (
    <Theme themeColor="sky" textColor="white">
      <Layout layout="section">
        <Spacer />
        <Spacer />
        <Title textAlign="center" textSize="xlarge">
          Concept
        </Title>
        <Spacer />
        <Spacer />
        <Content horizontal="center">
          <Content horizontal="left" textSize="xlarge">
            <li className="slide-list">Easy to make</li>
            <li className="slide-list">Easy to customize</li>
            <li className="slide-list">Abundant theme colors</li>
          </Content>
        </Content>
      </Layout>
    </Theme>
  )
}

const Figure = () => {
  return (
    <Theme themeColor="sky" textColor="white">
      <Layout layout="section">
        <Spacer />
        <Title textAlign="center" textSize="xlarge">It can create Figure!!</Title>
        <Spacer />
        <Spacer />
        <Content horizontal="center">
          <div className="figure">
            <Square width="300" height="400" color="black" borderColor="yellow" borderWidth="10">
              <Content vertical='center' horizontal='center' textSize='large' height='100%'>
                Box
              </Content>
            </Square>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Square width="100" height="60" color="white" />
              <TriangleRight height="40" size="80" color="white" />
            </div>
            <Circle width="300" height="300" color="#e83a3a" borderColor="white" borderWidth="10">
              <Content vertical='center' horizontal='center' textSize='large' height='100%'>
                Circle
              </Content>
            </Circle>
          </div>
        </Content>
      </Layout>
    </Theme>
  )
}

const Themes = () => {
  return (
    <Theme themeColor="sky" textColor="white">
      <Layout layout="subject">
        <Title textAlign="center">
          Themes
        </Title>
      </Layout>
    </Theme>
  )
}

const Default = () => {
  return (
    <Theme themeColor="default" textColor="black">
      <Layout layout="section">
        <Spacer />
        <Spacer />
        <Title textAlign="center" textSize="xlarge">
          Themes
        </Title>
        <Spacer />
        <Spacer />
        <Content horizontal="center" textSize="xxlarge">
          <Layout layout="subject">Default</Layout>
        </Content>
      </Layout>
    </Theme>
  )
}

const Sunset = () => {
  return (
    <Theme themeColor="sunset" textColor="yellow">
      <Layout layout="section">
        <Spacer />
        <Spacer />
        <Title textAlign="center" textSize="xlarge">
          Themes
        </Title>
        <Spacer />
        <Spacer />
        <Content horizontal="center" textSize="xxlarge">
          <Layout layout="subject">Sunset</Layout>
        </Content>
      </Layout>
    </Theme>
  )
}

const Malinka = () => {
  return (
    <Theme themeColor="malinka" textColor="white">
      <Layout layout="section">
        <Spacer />
        <Spacer />
        <Title textAlign="center" textSize="xlarge">
          Themes
        </Title>
        <Spacer />
        <Spacer />
        <Content horizontal="center" textSize="xxlarge">
          <Layout layout="subject">Malinka</Layout>
        </Content>
      </Layout>
    </Theme>
  )
}

const Moon = () => {
  return (
    <Theme themeColor="moon" textColor="white">
      <Layout layout="section">
        <Spacer />
        <Spacer />
        <Title textAlign="center" textSize="xlarge">
          Themes
        </Title>
        <Spacer />
        <Spacer />
        <Content horizontal="center" textSize="xxlarge">
          <Layout layout="subject">Moon</Layout>
        </Content>
      </Layout>
    </Theme>
  )
}

const Darkblue = () => {
  return (
    <Theme themeColor="darkblue" textColor="white">
      <Layout layout="section">
        <Spacer />
        <Spacer />
        <Title textAlign="center" textSize="xlarge">
          Themes
        </Title>
        <Spacer />
        <Spacer />
        <Content horizontal="center" textSize="xxlarge">
          <Layout layout="subject">Darkblue</Layout>
        </Content>
      </Layout>
    </Theme>
  )
}

const Green = () => {
  return (
    <Theme themeColor="green" textColor="white">
      <Layout layout="section">
        <Spacer />
        <Spacer />
        <Title textAlign="center" textSize="xlarge">
          Themes
        </Title>
        <Spacer />
        <Spacer />
        <Content horizontal="center" textSize="xxlarge">
          <Layout layout="subject">Green</Layout>
        </Content>
      </Layout>
    </Theme>
  )
}

const Sky = () => {
  return (
    <Theme themeColor="sky" textColor="white">
      <Layout layout="section">
        <Spacer />
        <Spacer />
        <Title textAlign="center" textSize="xlarge">
          Themes
        </Title>
        <Spacer />
        <Spacer />
        <Content horizontal="center" textSize="xxlarge">
          <Layout layout="subject">Sky</Layout>
        </Content>
      </Layout>
    </Theme>
  )
}

const Dark = () => {
  return (
    <Theme themeColor="dark" textColor="white">
      <Layout layout="section">
        <Spacer />
        <Spacer />
        <Title textAlign="center" textSize="xlarge">
          Themes
        </Title>
        <Spacer />
        <Spacer />
        <Content horizontal="center" textSize="xxlarge">
          <Layout layout="subject">Dark</Layout>
        </Content>
      </Layout>
    </Theme>
  )
}

const Documentation = () => {
  return (
    <Theme themeColor="sky" textColor="white">
      <Layout layout="subject">
        <Title textAlign="center">
          Let's use React Speaker Board!
        </Title>
        <Spacer />
        <Link href="/docs/ja/introduction" className="show-docs">
          <span className="show-docs-text">Documentation(Japanese)</span>
        </Link>
      </Layout>
    </Theme>
  )
}

export const Slide = [
  Subject,
  Install,
  Concept,
  Figure,
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
