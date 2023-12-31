import { useEffect, useState } from "react";
import { IGif, getGifs } from "../helpers/getGifs";


interface IUseFetchGifs {
    gifList: IGif[],
    isLoading: boolean
}



export const useFetchGifs = ( category:string ):IUseFetchGifs => {


    const [gifList, setGifList] = useState<IGif[]>([]);

    const [isLoading, setIsLoading] = useState<boolean>(true);


    useEffect(()=>{

        const gifs = async() => {

            const gifsArray:IGif[] = await getGifs( category );

            setGifList(gifsArray);
            setIsLoading(false);

        }

        gifs();
        
    },[]);
  

    return {
        gifList,
        isLoading

    }
}
