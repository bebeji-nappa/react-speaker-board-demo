import React from "react";
import "./SectionTitle.css"

export const SectionTitle:React.VFC<SectionTitle> = React.memo(({children, textAlign = "left"}) => {
  return (
    <h2 className={`SectionTitle${textAlign && ` ${textAlign}`}`}>{children}</h2>
  )
})
