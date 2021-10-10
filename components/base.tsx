import { NextPage } from 'next'
import DocsMenu from './menu'
import DocsPage from './page'

const DocsBase: NextPage<DocsBase> = ({ mdData }) => {
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
