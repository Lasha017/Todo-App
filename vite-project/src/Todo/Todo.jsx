import React, { useEffect, useState } from 'react'
import "./Todo.css"
import image from "./../assets/moon.svg";


const Todo = () => {
    
  const [input, setInput] = useState("")
  const [outPut,setOutput] = useState([])


  function addTask(event) {
    setOutput((prev) => [...prev, input]);
  }
  
  // useEffect(() => {
  // console.log("hello");
  // }, [])

  

  return (
      <>
      <div className="container">
        <header>
          <h1>T O D O</h1>
          <img src={image} alt="Todo Image" />
        </header>
        <div className='input-box'> 
          <div className='upperInput'>
          <input type="checkbox" className='checkbox'/>
          <input type="text" placeholder='Create a new todo…' className='input' onChange={(e) =>  setInput(e.target.value)} />
          <button onClick={addTask} className='addBtn'>+</button>
          </div>
              <div>
              {outPut.map((item) => {
                return (
                  <div className='mapped'>
                  <div style={{ display: "flex" }} className='outputList'>
                    <input type="checkbox" />
                    <li>{item}</li>
                    <button>X</button>
                    </div>
                  </div>
                   );
               })}
              </div>
        </div>
        </div>
      </>
  )
}

export default Todo

