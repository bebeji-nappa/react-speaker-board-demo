import React from "react";
import DocsMenu from './menu'
import DocsPage from './page'

const DocsBase: React.FC<DocsBase> = ({ mdData }) => {
  return (
    <div className="docs-base">
      <DocsMenu />
      <DocsPage>
        {mdData}
      </DocsPage>
    </div>
  )
}

export default DocsBase
