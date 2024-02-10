# Figure

## Figure とは?

下記コンポーネントを使うことで、作図を行うことが出来ます。

- `Square`
- `Circle`
- `TriangleUp`
- `TriangleDown`
- `TriangleRight`
- `TriangleLeft` 
- `ArrowUp`
- `ArrowDown`
- `ArrowRight`
- `ArrowLeft` 

### Sample Code

```tsx
import React from "react";
import { Title, Content, Spacer, Layout, Theme, TriangleRight, Square, Circle } from 'react-speaker-board'

const Figure = () => {
  return (
    <Theme themeColor="sky" textColor="white">
      <Layout layout="section">
        <Spacer />
        <Title textAlign="center" textSize="xlarge">It can create Figure!!</Title>
        <Spacer />
        <Spacer />
        <Content horizontal="center" vertical="center" layout="horizontal" gap="100px">
          <Square width="300px" height="400px" color="black" borderColor="yellow" borderWidth="10px">
            <Content vertical='center' horizontal='center' textSize='large' height='100%'>
              Box
            </Content>
          </Square>
          <ArrowRight width="100px" color="white" />
          <Circle width="300px" height="300px" color="#e83a3a" borderColor="white" borderWidth="10px">
            <Content vertical='center' horizontal='center' textSize='large' height='100%'>
              Circle
            </Content>
          </Circle>
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
    <Square width="300px" height="400px" color="black" borderColor="yellow" borderWidth="10px" />
  )
}

export default Figure
```

#### Props
| Name | Description | Default |
|----|----|----|
| color | 四角形の色を指定する(16進数指定可能) | `black` |
| width | 横幅を指定する | `100px` |
| height | 縦幅を指定する | `100px` |
| borderColor | 枠線の色を指定する(16進数指定可能) | `white` |
| borderWidth | 枠線の太さを指定する(数値のみ指定) | `0` |

### Circle
円形を生成します。また、円形の中に文字やHTMLを指定することが出来ます。

#### Code

```tsx
import React from "react";
import { Circle } from 'react-speaker-board'

const Figure = () => {
  return (
    <Circle width="300px" height="300px" color="red" borderColor="white" borderWidth="10px" />
  )
}

export default Figure
```

#### Props
| Name | Description | Default |
|----|----|----|
| color | 四角形の色を指定する(16進数指定可能) | `black` |
| width | 横幅を px で指定する | `100px` |
| height | 縦幅を px で指定する | `100px` |
| borderColor | 枠線の色を指定する(16進数指定可能) | `white` |
| borderWidth | 枠線の太さを指定する | `0` |

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
    <TriangleRight height="40px" size="80px" color="white" />
  )
}

export default Figure
```

#### Props
| Name | Description | Default |
|----|----|----|
| color | 三角形の色を指定する(16進数指定可能) | `black` |
| size | 大きさを指定する | `100px` |
| height | 三角形の高さを指定する | `100px` |


## Arrow Compoment
矢印のコンポーネントを定義することが出来ます。

===warning
現在カスタマイズは、一部しか設定できません。
細部までカスタマイズしたい場合は、Tips を確認してください。
===

### ArrowDown
下向きの矢印を作成します。
#### Props
| Name | Description | Default |
|----|----|----|
| color | 矢印の色を指定する(16進数指定可能) | `black` |
| height | 矢印の高さを指定する | `100px` |

### ArrowUp
上向きの矢印を作成します。
#### Props
| Name | Description | Default |
|----|----|----|
| color | 矢印の色を指定する(16進数指定可能) | `black` |
| height | 矢印の高さを指定する | `100px` |

### ArrowRight
右向きの矢印を作成します。
#### Props
| Name | Description | Default |
|----|----|----|
| color | 矢印の色を指定する(16進数指定可能) | `black` |
| width | 矢印の横幅を指定する | `100px` |

### ArrowLeft
左向きの矢印を作成します。
#### Props
| Name | Description | Default |
|----|----|----|
| color | 矢印の色を指定する(16進数指定可能) | `black` |
| width | 矢印の横幅を指定する | `100px` |


#### Tips: 矢印を作る
矢印は `Square` と `TriangleUp/Down/Right/Left` を組み合わせることで、作成できます。

下記コードは、右矢印を作成しています。

```tsx
import React from "react";
import { Square, TriangleRight, Content } from 'react-speaker-board'

const Figure = () => {
  return (
    <Content horizontal="center" vertical="center" layout="horizontal">
      <Square width="100px" height="50px" color="white" />
      <TriangleRight height="50px" size="60px" color="white" />
    </Content>
  )
}

export default Figure
```

配置を変えてみて、別の矢印を作ってみてください!

