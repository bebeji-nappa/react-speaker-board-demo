import React from "react"
import "./Layout.css"

export const Layout: React.VFC<Layout> = ({ children, layout }) => {
  return (
    <div className={`board ${layout}`}>
      {children}
    </div>
  )
}
