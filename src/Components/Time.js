import { React, useEffect, useState } from 'react'

export default function Time() {
  const [time, setTime] = useState(0)

  const handleClick = () => {
    setTime(time + 1)
  }

  useEffect(() => {
    console.log("component is re-rendered");
  })
  return (
    <div>
      <h1>the time is {time}</h1>
      <button onClick={handleClick}>Time</button>
  
    </div>
  )
}

