
import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';


const GifExpertApp =()=>{
    
    const [categorias, setcategorias] = useState(["one punch"]);
    //const agregar =()=>{setcategorias([...categorias,"parasite"]);
    
    return(
        <>
           <h2>GiftExpertApp</h2>
           <AddCategory setCategorias={setcategorias} />
        <hr/>
        
        
        <ol>
            {
            categorias.map(categoria=>(
              <GifGrid 
              key={categoria}
              categoria ={categoria}/>
            )
             
            )
            }
            
            
        </ol>   
        </>
      
        
        )
}

 export default GifExpertApp;
