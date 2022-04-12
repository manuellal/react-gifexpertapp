import { useState} from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () =>{

    //const categorias= ['One Punch', 'Samurai X' ,'Drangon ball'];
     const [categories,setCategories]=useState(['One Punch']);

    // const handleAdd=()=>{
        
    //     //setCategories([...categories,'Hunter']);
    //     setCategories(cats=>[...cats,'Hunters']);

    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>   
            
        <ol>
            {
              categories.map( (category)=>
                   <GifGrid 
                   key={category}
                   category={category}/>
              )
            }
        </ol>

            
        </>
    )
    
  
    }