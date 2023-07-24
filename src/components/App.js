
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  let [count,setCount]=useState(0);

  function sum(e){
    let value=e.target.value;
    setCount(count=count+value)

  }
  return (
    <div>
        <input type="number" onChange={sum}/>
        <p>Sum: {count}</p>
    </div>
  )
}

export default App
