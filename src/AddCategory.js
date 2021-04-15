import React,{useState}from 'react'




const AddCategory = ({setCategorias}) => {
    
    const [inputvalue, setinputvalue] = useState("");
    const cuadroDetexto =(e)=>{
        setinputvalue(e.target.value);
        
    }
    const cuadroDetextoEnviar =(e)=>{
        e.preventDefault();
if(inputvalue.trim().length >2) {
     setCategorias(cats =>[inputvalue,...cats]);
     setinputvalue("")
}
       

        

    }
    return (
        
        <form onSubmit={cuadroDetextoEnviar}> 
           <h2>Add Category</h2> 
         <input type="text" value={inputvalue}onChange={cuadroDetexto}></input>    
        </form>
        
        
    )
}
export default AddCategory;
