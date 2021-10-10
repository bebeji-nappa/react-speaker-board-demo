import { NextPage } from 'next'

const DocsPage: NextPage = ({ children }) => {
  return (
    <div className="docs-page">
      {children}
    </div>
  )
}

export default DocsPage
