import React from "react";
import Link from 'next/link';

const DocsMenu = () => {
  return (
    <div className="docs-menu">
      <Link href="/" className="h4 docs-menu-title">
        React Speaker Board
      </Link>
      <pre style={{ backgroundColor: "#dddddd", fontSize: "14px", padding: "5px" }}>
        <code>v0.4.1</code>
      </pre>
      <ul>
        <li>
          <Link href="/docs/ja/introduction" className="h5 docs-menu-list">
            Introduction
          </Link>
        </li>
        <li>
          <Link href="/docs/ja/components" className="h5 docs-menu-list">
            Components
          </Link>
        </li>
        <li>
          <Link href="/docs/ja/figure" className="h5 docs-menu-list">
            Figure
          </Link>
        </li>
        <li>
          <Link href="/docs/ja/pdf" className="h5 docs-menu-list">
            PDF Download
          </Link>
        </li>
      </ul>
    </div>
  )
};

export default DocsMenu;
