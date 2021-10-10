import { NextPage } from 'next'
import DocsMenu from './menu'
import DocsPage from './page'

const DocsBase: NextPage = ({ children }) => {
  return (
    <div className="docs-base">
      <DocsMenu />
      <DocsPage>
        {children}
      </DocsPage>
    </div>
  )
}

export default DocsBase
