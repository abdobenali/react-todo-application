import React from 'react'

function TodoForm({onClick,onChangeName,onChangeDescription}) {
  


  return (
    <>
        <h1>Todo App</h1>
        <div>
            <form>
                <label>Name</label>
                <input type="text" placeholder='Todo Name' name='todoname' onChange={onChangeName} />
                <label>Description</label>
                <input type="text" placeholder='Todo Description' name='tododescription' onChange={onChangeDescription} />
                <button onClick={onClick}>Add Todo</button>
            </form>
        </div>
    </>
  )
}

export default TodoForm