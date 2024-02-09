# Components

## ReactSpeakerBoard

```tsx
import { ReactSpeakerBoard } from 'react-speaker-board'

export default function Home () {
  return <ReactSpeakerBoard slide={Slide} mode="slide" />
};
```

スライドボードコンポーネントをブラウザに読み込ませるコンポーネントです。

===warning
このコンポーネントは必須です。このコンポーネントがないと、スライドボードは表示されません。
===

### Props

===warning
`width`, `height` は、 `inlineSlide` モード時のみ指定可能です。
===


| Name | Description | Default |
|----|----|----|
| mode | スライドボードの表示モードを選択する(`slide` / `inlineSlide`) | `slide` |
| slide(必須) | スライドボードのコンポーネントを指定する | - |
| controlTheme | スライドボード操作ボタンの色を指定する(16進数指定が可能) | `#71a3e3` |
| controlBar | スライドボード操作バーの背景色を選択する(`none` / `light` / `dark`) | `none` |
| width | スライドボードの横幅を指定する(inlineSlide モード時のみ指定可能) | `80vw` |
| height | スライドボードの縦幅を指定する(inlineSlide モード時のみ指定可能) | `80vh` |

## Theme
```tsx
import { Theme } from 'react-speaker-board'

const slide = () => {
  return (
    <Theme themeColor="dark" textColor="white">
      {/*
        略
      */}
    </Theme>
  )
}
```

スライドボード全体のテーマ(背景/文字色)を指定します。
また、`props.customThemeColor` で、単色カラーなど背景色をカスタマイズ出来ます。

```tsx
import { Theme } from 'react-speaker-board'

const slide = () => {
  return (
    <Theme customThemeColor="#ff0000" textColor="white">
      {/*
        略
      */}
    </Theme>
  )
}
```

===warning
このコンポーネントは必須です。必ず最初に挿入します。
===

### 背景テーマ一覧
- `default`
- `sunset`
- `malinka`
- `moon`
- `darkblue`
- `sky`
- `green`
- `dark`

### Props

| Name | Description | Default |
|----|----|----|
| themeColor | スライドボードの背景テーマを選択する | `default` |
| textColor | スライドボードの文字色を指定する(16進数での指定可能) | `black(#000000)` |
| customThemeColor | スライドボードの背景色を指定する(16進数での指定可能) | - |

## Layout

```tsx
import { Theme, Layout } from 'react-speaker-board'

const slide = () => {
  return (
    <Theme themeColor="dark" textColor="white">
      <Layout layout="subject">
        {/*
          略
        */}
      </Layout>
    </Theme>
  )
}
```

スライドボード全体のテーマ(背景/文字色)を指定します。


===warning
`Layout` は、必ず `Theme` の中に入れます。
===

===warning
`Layout` 自体は、後述する `Content` の中に入れて設定することが出来ます。
===

### レイアウト一覧
#### `subject`
タイトル&主題を表示するためのレイアウト

#### `section`
タイトル以外のコンテンツを表示するためのレイアウト


### Props

| Name | Description | Default |
|----|----|----|
| layout(必須) | スライドボードのレイアウトを選択する(`subject`/`section`) | - |

## Title
```tsx
import { Theme, Layout, Title } from 'react-speaker-board'

const slide = () => {
  return (
    <Theme themeColor="dark" textColor="white">
      <Layout layout="subject">
        <Title>Hello React Speaker Board!</Title>
      </Layout>
    </Theme>
  )
}
```

スライドボードのタイトルを表示するためのコンポーネントです。

===warning
Layout の中で使用します。
===

### 配置一覧
- `Left`
- `Center`
- `Right`


### 文字サイズ一覧
- `xsmall`
- `small`
- `medium`
- `large`
- `xlarge`
- `xxlarge`
- `xxxlarge`

### Props

| Name | Description | Default |
|----|----|----|
| textAlign | 文字の配置を選択する | `left` |
| textSize | 文字の大きさを選択する | `xxxlarge` |


## Text
```tsx
import { Theme, Layout, Text } from 'react-speaker-board'

const slide = () => {
  return (
    <Theme themeColor="dark" textColor="white">
      <Layout layout="subject">
        <Text>Hello React Speaker Board!</Text>
      </Layout>
    </Theme>
  )
}
```

スライドボードにテキストを挿入します。

===warning
Layout の中で使用します。
===

### 配置一覧
- `Left`
- `Center`
- `Right`


### 文字サイズ一覧
- `xsmall`
- `small`
- `medium`
- `large`
- `xlarge`
- `xxlarge`
- `xxxlarge`

### Props

| Name | Description | Default |
|----|----|----|
| textAlign | 文字の配置を選択する | `left` |
| textSize | 文字の大きさを選択する | `medium` |


## Content
```tsx
import { Theme, Layout, Title, Content } from 'react-speaker-board'

const slide = () => {
  return (
    <Theme themeColor="dark" textColor="white">
      <Layout layout="section">
        <Title>Hello React Speaker Board!</Title>
        <Content horizontal="center" size="xxlarge">
          YES!!!!
        </Content>
      </Layout>
    </Theme>
  )
}
```

スライドボードのコンテンツを表示するためのコンポーネントです。`Content` 内では、文字列 & HTML で自由に調整ができます。

===warning
Layout の中で使用します。
===

===warning
基本的に Layout が `section` のときに使用します。
===

### 配置一覧
#### horizontal
- `left`
- `center`
- `right`

#### vertical
- `up`
- `center`
- `down`

### 文字サイズ一覧
- `xsmall`
- `small`
- `medium`
- `large`
- `xlarge`
- `xxlarge`
- `xxxlarge`

### Props

| Name | Description | Default |
|----|----|----|
| horizontal | 中の要素の水平の配置を指定する | `left` |
| vertical | 中の要素の垂直の配置を指定する | `up` |
| size | 文字の大きさを選択する | `medium` |
| width | 横幅を指定する | `auto` |
| textSize | 縦幅を指定する | `auto` |


## Spacer
```tsx
import { Theme, Layout, Spacer, Title } from 'react-speaker-board'

const slide = () => {
  return (
    <Theme themeColor="dark" textColor="white">
      <Layout layout="subject">
        <Spacer />
        <Title>Hello React Speaker Board!</Title>
      </Layout>
    </Theme>
  )
}
```

スライドボード内に余白を作成します。余白&位置調整の際に使用してください。

===warning
Layout の中で使用します。
===

### Props
- なし

