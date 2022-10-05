import React from 'react'
import './ShowTodo.css'

function ShowTodo({prop1,prop2,clickdelete,clickcomplete}) {
  
    
  
    
      return (
        <>
          {prop1.map(
            todo =>
              <div key={todo.id} className={prop2 ? "complete_className": null}>
                <h2>{todo.name}</h2>
                <h3>{todo.description}</h3>
                <button  onClick={() => clickdelete(todo.id)}>Delete</button>
                <button  onClick={() => clickcomplete(todo.id)}>Complete</button>
              </div> 
            )
        }
        </>
      )

    
        
    
  
}

export default ShowTodo