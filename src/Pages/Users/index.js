import { useState, useEffect } from 'react'
import axios from 'axios';
import './Users.css'

 function Users() {
  const [Users, setUsers] = useState()
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, [])
  return (
    <div className='Users-Container'>
    <div className='Users-Wrapper'>
      {
        Users ?
          Users.map(user => {
            return (
              <div class="card todos-card-wrapper" style={{marginBottom:'10px'}}>
                <div class="card-body">
                  <h5 class="card-title">User {user.id}</h5>
                  <h6 class="card-subtitle mb-2 text-muted"></h6> <a href="#">View Profile </a>
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
export default Users;