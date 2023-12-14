import { useEffect } from 'react'
import './CSS/Todo.css'
import { useState, useRef } from 'react'

let count = 0
const Todo = () => {

    const [todos, setTodos] = useState([])
    const inputRef = useRef(null)

    const add = ()=> {
        setTodos([...todos,{no:count++, text:inputRef.current.value, display:""}])
        inputRef.current.value = ""
    }

    useEffect(()=>{
        console.log(todos)
    },[todos])

  return (
    <div className='todo'>
        <div className="todo-header">To-do List</div>
        <div className="todo-add">
            <input ref={inputRef} type="text" placeholder='Add your task' className='todo-input'/>
            <div onClick={()=>{add()}} className="todo-addbtn">ADD</div>
        </div>

        <div className="todo-list">
            
        </div>
       
    </div>
  )
}

export default Todo