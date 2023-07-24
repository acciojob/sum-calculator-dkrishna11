
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  let [count,setCount]=useState(0);

  function sum(e){
    setCount(parseInt(count) + parseInt(e.target.value))

  }
  return (
    <div>
      <h1>Sum Calculator</h1>
        <input type="number" onChange={sum}/>
        <p>Sum: {count}</p>
    </div>
  )
}

export default App
