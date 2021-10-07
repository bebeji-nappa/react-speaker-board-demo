import React from "react";
import "./MainText.css"

export const MainText:React.VFC<MainText> = React.memo(({children, textAlign = "left", size = "medium"}) => {
  return (
    <div className={`MainText${textAlign && ` ${textAlign}`}${size && ` size-${size}`}`}>{children}</div>
  )
})
