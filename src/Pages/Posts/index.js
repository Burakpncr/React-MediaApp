import { useState, useEffect } from 'react'
import axios from 'axios';
import "./Posts.css"

function Posts() {
  const [Posts, setPosts] = useState()
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, [])
  
  return (
    <div className='Posts-Container'>
      <div className='Posts-Wrapper'>
        {
          Posts ?
            Posts.map(post => {
              return (
                <div class="card todos-card-wrapper" style={{marginBottom:'10px'}}>
                  <div class="card-body">
                    <h5 class="card-title">User</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{post.title}</h6>
                    <h6 class="card-subtitle mb-2 text-muted">{post.body}</h6>
                    <p class="card-text"> </p>
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

export default Posts;
