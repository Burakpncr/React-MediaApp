import { useState, useEffect } from 'react'
import axios from 'axios';
import "./Todos.css"

function Todos() {
  const [Todos, setTodos] = useState()
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        setTodos(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, [])
  console.log(Todos)
  return (
    <div className='Todos-Container'>
      <div className='Todos-Wrapper'>
        {
          Todos ?
            Todos.map(todo => {
              return (
                <div class="card todos-card-wrapper" style={{marginBottom:'10px'}}>
                  <div class="card-body">
                    <h5 class="card-title">Task {todo.id}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{todo.title}</h6>
                    <p class="card-text"> {todo.completed ? "Completed" : "Not Completed"}</p>
                  </div>
                </div>
              )
            }) : <div>
              <p class="placeholder-glow">
                <span class="placeholder col-12"></span>
              </p>

              <p class="placeholder-wave">
                <span class="placeholder col-12"></span>
              </p>
            </div>
        }
      </div>

    </div>
  )
}

export default Todos;
