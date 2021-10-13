import { Title, Content, Spacer, Layout, Theme } from 'react-speaker-board'
import Image from 'next/image';

const Subject = () => {
  return (
    <Theme themeColor="sky" textColor="white">
      <Layout layout="subject">
        <Title textAlign="center">React Speaker Board</Title>
        <Spacer />
        <Content horizontal="center">
          <span style={{ textAlign: "center" }}>
            Easily create presentation board using React.
          </span>
        </Content>
      </Layout>
    </Theme>
  )
}

export const Slide = [ Subject ]
