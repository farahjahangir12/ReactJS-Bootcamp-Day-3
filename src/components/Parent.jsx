import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import {useState} from "react"
import { createContext } from 'react'

const ClickContext = createContext();
const Parent = () => {
    const [click,setClick] = useState(0);
    const [obj,setObj]=useState({
        first:"Farah",
        last:"Jahangir"
    })
    const handlechange = (e) =>{
       const {value,name} =e.target
        setObj((previousState)=>
        ({
            ...previousState,
           [name]:value
        }))
    }
  return (
    <ClickContext.Provider value={click}>
      <h1>I am the parent element</h1>
      <button onClick={()=>setClick(click+1)}>Click Me</button>
      <label>{click}</label>
      <input type="text" placeholder="firstname" name="first" onChange={handlechange} value={obj.first}/>
      <input type="text" placeholder="lastname" name="last"  onChange={handlechange} value={obj.last}/>
      
    {obj.first && obj.last &&
    <label>
        {obj.first} + {obj.last}
    </label>
         }
      
      
      <Child1/>
      <Child2/>
      </ClickContext.Provider>
  )
}

export {Parent,ClickContext}
