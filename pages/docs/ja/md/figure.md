# Figure

## Figure とは?

下記コンポーネントを使うことで、作図を行うことが出来ます。

- `Square`
- `Circle`
- `TriangleUp`
- `TriangleDown`
- `TriangleRight`
- `TriangleLeft` 

### Sample Code

```tsx
import React from "react";
import { Title, Content, Spacer, Layout, Theme, TriangleRight, Square, Circle } from 'react-speaker-board'
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

export default Figure
```

[プレビューを見る](/demo/figure)


## Components

### Square
四角形を生成します。また、四角形の中に文字やHTMLを指定することが出来ます。

#### Code

```tsx
import React from "react";
import { Square } from 'react-speaker-board'
const Figure = () => {
  return (
    <Square width="300" height="400" color="black" borderColor="yellow" borderWidth="10" />
  )
}

export default Figure
```

#### Props
| Name | Description | Default |
|----|----|----|
| color | 四角形の色を指定する(16進数指定可能) | black |
| width | 横幅を px で指定する(数値のみ指定) | 100 |
| height | 縦幅を px で指定する(数値のみ指定) | 100 |
| borderColor | 枠線の色を指定する(16進数指定可能) | white |
| borderWidth | 枠線の太さを指定する(数値のみ指定) | 0 |

### Circle
円形を生成します。また、円形の中に文字やHTMLを指定することが出来ます。

#### Code

```tsx
import React from "react";
import { Circle } from 'react-speaker-board'
const Figure = () => {
  return (
    <Circle width="300" height="300" color="red" borderColor="white" borderWidth="10" />
  )
}

export default Figure
```

#### Props
| Name | Description | Default |
|----|----|----|
| color | 四角形の色を指定する(16進数指定可能) | black |
| width | 横幅を px で指定する(数値のみ指定) | 100 |
| height | 縦幅を px で指定する(数値のみ指定) | 100 |
| borderColor | 枠線の色を指定する(16進数指定可能) | white |
| borderWidth | 枠線の太さを指定する(数値のみ指定) | 0 |

### TriangleUp / TriangleDown / TriangleRight / TriangleLeft
三角形を生成します。

#### TriangleUp
上向きの三角形を生成します

#### TriangleDown
下向きの三角形を生成します

#### TriangleRight
右向きの三角形を生成します

#### TriangleLeft
左向きの三角形を生成します


#### Code
```tsx
import React from "react";
import { TriangleRight } from 'react-speaker-board'
const Figure = () => {
  return (
    <TriangleRight height="40" size="80" color="white" />
  )
}

export default Figure
```

#### Props
| Name | Description | Default |
|----|----|----|
| color | 三角形の色を指定する(16進数指定可能) | black |
| size | 大きさを px で指定する(数値のみ指定) | 100 |
| height | 三角形の高さを px で指定する(数値のみ指定) | 100 |


## Tips: 矢印を作る
矢印は `Square` と `TriangleUp/Down/Right/Left` を組み合わせることで、作成できます。

下記コードは、右矢印を作成しています。

```tsx
import React from "react";
import { Square, TriangleRight } from 'react-speaker-board'
const Figure = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      <Square width="100" height="60" color="white" />
      <TriangleRight height="40" size="80" color="white" />
    </div>
  )
}

export default Figure
```

配置を変えてみて、別の矢印を作ってみてください!

