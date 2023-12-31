import React from "react"
import { IGif } from "../helpers/getGifs"




export const GifItem: React.FC<IGif> = ( { title,url } ) => {

  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )

}
