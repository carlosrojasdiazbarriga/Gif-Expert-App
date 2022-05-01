// import { useState,useEffect } from "react";
import { GifGridItem } from "./GifGridItem";

import { useFetchGifs } from "../Hooks/useFetchGifs";

const GifGrid = ({category})=>{

    const {data:imgs,loading} = useFetchGifs(category);


    return(
        <>
            <h3>{category}</h3>
            {loading ? <p>Loading...</p> : null}
            <div className='card-grid'>
                    {
                        imgs.map( img=>
                        <GifGridItem 
                        key={img.id}
                        {...img}
                        />)
                    }
            </div>
        </>

    );
}

export default GifGrid;