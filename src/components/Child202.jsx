import React from 'react'
import { ClickContext } from './Parent'
import { useContext } from 'react'
const Child202 = () => {
    const prop =useContext(ClickContext);
  return (
    <div>
      <p>I am Child2 of Child 2</p>
      <p>Click Value of my Grand Parent: {prop}</p>
    </div>
  )
}

export default Child202
