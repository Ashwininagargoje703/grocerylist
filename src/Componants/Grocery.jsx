import {useState} from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";

export const Grocery = () => {

    const [Grocerys,setGrocerys]=useState([]);

    const addGrocery=(data)=>{
      
        setGrocerys([...Grocerys,data]);
    };
 //  const deleteGrocery=(id)=>{
      //   setGrocerys()
    // }

   return (
       <div>
           <GroceryInput addGrocery={addGrocery}/>
           {Grocerys.map((e) => (
               <GroceryList Grocery={e} key={GroceryList.id}/>
           ))}
       </div>
   )


}