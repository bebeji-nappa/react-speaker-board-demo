import React from 'react'
import { MainTitle, MainText, SectionTitle, Spacer, Layout } from './slideboard'
import "./main.css"

const Subject = (
  <Layout layout="subject">
    <MainTitle textAlign="center">React Speaker Board 作ってみた!</MainTitle>
    <Spacer />
    <MainText textAlign="center">
      <span style={{ textAlign: "center" }}>
        nappa
      </span>
    </MainText>
  </Layout>
)

const Content_1 = (
  <Layout layout="subject">
    <MainTitle textAlign="center">どやさ???</MainTitle>
  </Layout>
)

const Content_2 = (
  <Layout layout="section">
    <Spacer />
    <SectionTitle textAlign="left">
      Webpack で使ってみた結果
    </SectionTitle>
    <Spacer />
    <Spacer />
    <MainText size="large">
      <li className="list">すごいぜ、俺!!!</li>
      <li className="list">すごいぜ、俺!!!</li>
      <li className="list">すごいぜ、俺!!!</li>
    </MainText>
  </Layout>
)

const Content_3 = (
  <Layout layout="section">
    <Spacer />
    <SectionTitle textAlign="left">
      Webpack で使ってみた結果2
    </SectionTitle>
    <Spacer />
    <Spacer />
    <Spacer />
    <MainText textAlign="center" size="xxlarge">
      <Layout layout="subject">
        いいぜぇ!!!
      </Layout>
    </MainText>
  </Layout>
)

export const Slide = [
  Subject,
  Content_1,
  Content_2,
  Content_3,
]
