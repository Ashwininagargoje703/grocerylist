import logo from './logo.svg';
import './App.css';
import { Grocery } from "./Componants/Grocery";
import {GroceryInput  } from "./Componants/GroceryInput";
import { GroceryList} from "./Componants/GroceryList";


function App() {

  return (
    
 <div>
    <h1>Grocery</h1>
   <Grocery />
<GroceryInput />
<GroceryList/>


 </div>
  );
}
  

export default App;
