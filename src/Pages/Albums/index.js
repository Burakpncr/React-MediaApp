import {useState,useEffect} from 'react'
import axios from 'axios'
import "./Albums.css"

function Albums() {
  const [Albums, setAlbums] = useState()
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        setAlbums(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, [])
  console.log(Albums)
  return (
    <div className='Albums-Container'>
      <div className='Albums-Wrapper'>

      {
          Albums ?
            Albums.map(album => {
              return (
                <div className="card">
  <div className="card-body">
    <h5 className="card-title">{album.userId}</h5>
    <p className="card-text">{album.title}</p>
    <a href="#" className="card-link">View</a>
    <a href="#" className="card-link">View User's Profile</a>
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
export default Albums;