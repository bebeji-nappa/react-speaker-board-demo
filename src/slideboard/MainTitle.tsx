import React from "react";
import "./MainTitle.css"

export const MainTitle:React.VFC<MainTitle> = React.memo(({children, textAlign = "left"}) => {
  return (
    <h1 className={`MainTitle${textAlign && ` ${textAlign}`}`}>{children}</h1>
  )
})
