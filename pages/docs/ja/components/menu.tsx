import { NextPage } from 'next'
import { useState, useEffect } from 'react';
import { richmd } from 'richmd';
import MdFile from "../md/menu.md";

const DocsMenu: NextPage = () => {
  const [md, setMd] = useState<string>('');
  useEffect(() => {
    setMd(richmd(MdFile))
  }, [])

  return (
    <div className="docs-menu">
      <div dangerouslySetInnerHTML={{__html: md}}></div>
    </div>
  )
}

export default DocsMenu
