# Introduction

## React Speaker Board ってなに ?

React Speaker Board は React で簡単にプレゼン用スライドボードが作成できるライブラリです。

React Speaker Board はスライドボードを簡単に作成するためのコンポーネントを用意しています。

## Install

以下のコマンドを実行します。

```txt: shell
$ yarn add react-speaker-board
```

## Usage

まずは、スライドボードのコンポーネントを作成します。今回はタイトル画面だけ作ってみましょう。

`jsx` or `tsx` ファイルを作成して、以下のコードを記述します。

```tsx:Slide.tsx
import React from 'react'
import { MainTitle, Content, SectionTitle, Spacer, Layout, Theme } from 'react-speaker-board'

const Subject = () => {
  return (
    <Theme themeColor="sky" textColor="white">
      <Layout layout="subject">
        <MainTitle textAlign="center">React Speaker Board</MainTitle>
        <Spacer />
        <Content align="center">
          <span style={{ textAlign: "center" }}>
            Easily create presentation board using React.
          </span>
        </Content>
      </Layout>
    </Theme>
  )
}

export const Slide = [ Subject ]
```

次に、作成したスライドボード読み込んで、ブラウザで表示できるようにします。

```tsx:index.tsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ReactSpeakerBoard } from 'react-speaker-board'
import 'react-speaker-board/styles/style.css'
import { Slide } from './slide'

ReactDOM.render(
  <ReactSpeakerBoard slide={Slide} mode="slide" />,
  document.getElementById('root')
);
```

作成完了後、ビルドすると、スライドが表示されます。

→ [プレビューを見る](/docs/demo/introduction)


### スライドボードの仕組みについて

スライドボードはあらかじめ作成したスライドボードをコンポーネントを、配列で登録することで、スライドショーにすることが出来ます。

```tsx
import React from 'react'
import { MainTitle, Content, SectionTitle, Spacer, Layout, Theme } from 'react-speaker-board'

const Subject = () => {
  return (
    <Theme themeColor="sky" textColor="white">
      <Layout layout="subject">
        <MainTitle textAlign="center">React Speaker Board</MainTitle>
        <Spacer />
        <Content align="center">
          <span style={{ textAlign: "center" }}>
            Easily create presentation board using React.
          </span>
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
        <MainTitle textAlign="center">
          Concept
        </MainTitle>
        <Spacer />
        <Spacer />
        <Content align="center">
          <Content align="left" size="xlarge">
            <li>Easy to make</li>
            <li>Easy to customize</li>
            <li>Abundant theme colors</li>
          </Content>
        </Content>
      </Layout>
    </Theme>
  )
}

const Documentation = () => {
  return (
    <Theme themeColor="sky" textColor="white">
      <Layout layout="subject">
        <MainTitle textAlign="center">
          Let's use React Speaker Board!
        </MainTitle>
      </Layout>
    </Theme>
  )
}

export const Slide = [
  Subject,
  Concept,
  Documentation,
]
```
