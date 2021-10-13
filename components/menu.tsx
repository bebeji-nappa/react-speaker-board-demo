import { NextPage } from 'next'
import Link from 'next/link'
const DocsMenu: NextPage = () => {

  return (
    <div className="docs-menu">
      <Link href="/">
        <a className="h4 docs-menu-title">React Speaker Board</a>
      </Link>
      <ul>
        <li>
          <Link href="/docs/ja/introduction">
            <a className="h5 docs-menu-list">Introduction</a>
          </Link>
        </li>
        <li>
          <Link href="/docs/ja/components">
            <a className="h5 docs-menu-list">Components</a>
          </Link>
        </li>
        <li>
          <Link href="/docs/ja/figure">
            <a className="h5 docs-menu-list">Figure</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default DocsMenu
