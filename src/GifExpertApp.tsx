import { useState } from "react"




export const GifExpertApp = () => {

    const [categories, setCategories] = useState<string[]>([]);

    return (
        <>
            <h1>GifExpertApp</h1>

            <button>Agregar</button>

            <ol>
                {
                    categories.map( categorie => {
                        return <li key={categorie }>{ categorie }</li>
                    })
                }
            </ol>
        </>
    )

}