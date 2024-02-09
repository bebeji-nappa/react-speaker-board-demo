# PDF Download `0.3.0 ~`
`0.3.0` から PDF Download が出来るようになりました。
この機能は、[Speakerdeck](https://speakerdeck.com/) での配信や、書類としての配布におすすめです。

## Usage
`ReactSpeakerBoard` から `AllSlidePdf` コンポーネントに差し替えます。

```tsx
import { AllSlidePdf } from 'react-speaker-board'

export default function Home () {
  return <AllSlidePdf slide={Slide} />
};
```

ブラウザにアクセスすると、上部に `PDF Download` が出てくるので、そちらをクリックすると、ダウンロードが開始されます。

![Image](/pdf.png)

