import React, { useState } from 'react'

export default function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [op, setOp] = useState();
  const [result, setResult] = useState();

  function handleOperation() {
    if (op === "+") {
      setResult(num1 + num2)
    } else if (op === "-") {
      setResult(num1 - num2)
    } else if (op === "*") {
      setResult(num1 * num2)
    } else if (op === "/") {
      setResult(num1 / num2)
    }
  }

  return (
    <div>
      <input type="number" onChange={(e) => { setNum1(parseInt(e.target.value)) }} />
      <select onChange={(e) => { setOp(e.target.value) }}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" onChange={(e) => { setNum2(parseInt(e.target.value)) }} />
      <button onClick={handleOperation}>Calculate</button>
      <h1>the result is {result}</h1>
    </div>
  )
}
