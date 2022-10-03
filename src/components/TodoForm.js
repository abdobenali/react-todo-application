import React from 'react'

function TodoForm() {
  return (
    <>
        <h1>Todo App</h1>
        <div>
            <form>
                <label>Name</label>
                <input type="text" />
                <label>Description</label>
                <input type="text" />
                <button>Add Todo</button>
            </form>
        </div>
    </>
  )
}

export default TodoForm