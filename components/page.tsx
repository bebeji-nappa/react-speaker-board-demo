import { NextPage } from 'next'
import { useState, useEffect } from 'react';
import { richmd } from 'richmd';

const DocsPage: NextPage<DocsPage> = ({ children }) => {
  const [md, setMd] = useState<string>('');
  useEffect(() => {
    setMd(richmd(children))
  }, [children])

  return (
    <div className="docs-page">
      <div className="docs-wrapper" dangerouslySetInnerHTML={{__html: md}}></div>
    </div>
  )
}

export default DocsPage
