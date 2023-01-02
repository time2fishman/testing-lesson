import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleAddClick = () => {
    setCount(count + 1)
  }

  const handleSubtractClick = () => {
    if(count === 0) {
      setCount(count)
    } else {
      setCount(count - 1)
    }
  }

  const handleAdd1000 = () => {
    setCount(count + 1000)
  }

  return (
    <div>
      <h1>Counter</h1>
      <h3>Current Count: {count}</h3>
      <button onClick={handleAddClick}>+</button>
      <button onClick={handleSubtractClick}>-</button>
      <button onClick={handleAdd1000}>1000</button>
    </div>
  );
}


export default Counter;