import logo from './logo.svg';
import './App.css';
import Grocery from './Components/Grocery';
import { useState } from "react";

function App() {
  const [groceryList, setGroceryList] = useState([{name:'Rice', completed:false},{name:'Pulses', completed:false}]);
  localStorage.setItem('groceryList',JSON.stringify(groceryList));
  
  return (
    <div className="App">
      <Grocery groceryList={groceryList} setGroceryList={setGroceryList}/>
    </div>
  );
}

export default App;
