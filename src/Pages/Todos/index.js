import {useState,useEffect} from 'react'
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
  },[])
  console.log(Todos)
  return (
    <div className='Todos-Container'>
      <div className='Todos-Wrapper'>
        {
          Todos ? 
          Todos.map(todo => {
            return(
              <div className='Todos-Card'>
                <div>
               Todo : {todo.title}
               </div>
               <div>
                Status : {todo.completed ? "Completed" : "Not Completed"}
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
