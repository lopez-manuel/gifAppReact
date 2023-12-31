import React from "react"
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


interface IGifGrid {

    category: string,

}





export const GifGrid: React.FC<IGifGrid> = ({ category }) => {

    const { gifList, isLoading } = useFetchGifs(category)


    return (

        <>
            <h3>
                {category}
            </h3>

            {
                isLoading && <h1> CARGANDO...</h1>
            }
            <div className="card-grid">
                {
                    gifList.map( (image) =>(

                        <GifItem 
                            key={image.id} 
                            { ...image }
                        />

                    ))
                }
            </div>
        </>
    
    )
}
