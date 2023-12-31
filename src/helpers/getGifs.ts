
export interface IGif {
    id: string,
    title: string,
    url: string,
}


export const getGifs = async (category:string) => {

    const url:string = `https://api.giphy.com/v1/gifs/search?api_key=OUPuSXOaHev893ZuOlywZV5uyv4JZ76X&limit=20&q=${category}`

    const response:Response = await fetch( url )

    const {data} = await response.json();

    const gifs:IGif[] = data.map( ( gif:any ) => (
        
        {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }

    ))

    console.log(gifs);
    
    
    return gifs;
    
}