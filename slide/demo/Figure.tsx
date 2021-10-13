import { Title, Content, Spacer, Layout, Theme, TriangleRight, Square, Circle } from 'react-speaker-board'
import Image from 'next/image';

const Figure = () => {
  return (
    <Theme themeColor="sky" textColor="white">
      <Layout layout="section">
        <Spacer />
        <Title textAlign="center" size="xlarge">It can create Figure!!</Title>
        <Spacer />
        <Spacer />
        <Content horizontal="center">
          <div className="figure">
            <Square width="300" height="400" color="black" borderColor="yellow" borderWidth="10">
              <Content vertical='center' horizontal='center' size='large' height='100%'>
                Box
              </Content>
            </Square>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Square width="100" height="60" color="white" />
              <TriangleRight height="40" size="80" color="white" />
            </div>
            <Circle width="300" height="300" color="#e83a3a" borderColor="white" borderWidth="10">
              <Content vertical='center' horizontal='center' size='large' height='100%'>
                Circle
              </Content>
            </Circle>
          </div>
        </Content>
      </Layout>
    </Theme>
  )
}

export const Slide = [ Figure ]
