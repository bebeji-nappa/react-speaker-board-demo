import React from "react";
import DocsMenu from './menu'
import DocsPage from './page'
import "richmd/richmd.css";

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
