import React, { useState } from 'react'

import './App.css';
import ShowTodo from './components/ShowTodo';
import TodoForm from './components/TodoForm';

function App() {
  const [todoid,setTodoId] = useState(0)
  const [todoname,setTodoname] = useState('')
  const [tododescription,setTododescription] = useState('')
  const [todos,setTodos] = useState([])
  const [isActive, setActive] = useState(false);
  function handleTodoNameChange(e){
    setTodoname(e.target.value);
  }
  function handleTodoDescriptionChange(e){
    setTododescription(e.target.value);
  }
  function handleClick(e) {
    e.preventDefault()
    setTodoId(todoid+1)
    setTodos([...todos,{id:todoid,name:todoname,description:tododescription}])
  }
  function onClickDelete(keyofitem){
    
   //setTodos(todos.filter(todo => todo.id !== todoiddelete))
   console.log("delete clicked")
   console.log(keyofitem)
   setTodos(todos.filter(todo => todo.id !== keyofitem))
   
   
    
  }
  function onClickComplete(keyofitem){
    console.log("complete clicked")
    console.log(keyofitem)
    setActive(!isActive)
    console.log(isActive)
  }
  
  return (
    <div>
      <TodoForm onClick={handleClick} onChangeName={handleTodoNameChange} onChangeDescription={handleTodoDescriptionChange}/>
      
      <ShowTodo prop1={todos} prop2={isActive} clickcomplete={onClickComplete} clickdelete={onClickDelete} />
     
    </div>
  );
}

export default App;
