
import React from 'react'
import{GifGridItem} from "./GifGridItem";
import { useFetchGifs } from './hooks/useFetchGifs';
//import { getGifs} from "./helpers/getgifs"

export const GifGrid = ({categoria}) => {
 const {data:images,loading}= useFetchGifs(categoria);

    return (
    <>
    <h3 className="animate__animated animate__rubberBand">{categoria}</h3>
    {loading && <p className="animate__animated animate__slideInRight">cargando...</p>}
    <div className="card-grid">           
            {images.map(img=>(
                 <GifGridItem 
                 key={img.id}
                 {...img}/> 
            )            
             )}
                <li>item</li>           
        </div>                
    </>      
    )
}
export default GifGrid;
