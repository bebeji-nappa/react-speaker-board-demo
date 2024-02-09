import React from "react";
import { useState, useEffect } from 'react';
import { richmd } from 'richmd';

type DocsPageProps = {
  children: string;
};

const DocsPage: React.FC<DocsPageProps> = ({ children }) => {
  const [md, setMd] = useState<string>('');
  useEffect(() => {
    console.log(children)
    setMd(richmd(children))
  }, [children])
  return (
    <div className="docs-page">
      <div className="docs-wrapper" dangerouslySetInnerHTML={{__html: md}} />
    </div>
  )
}

export default DocsPage
