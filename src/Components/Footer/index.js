import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="Footer-Container">
      <div className="Footer-Wrapper">
        <div className="Footer-Logo">
         <h3> Action Post </h3>
        </div>
        <div className="Quick-Links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="todos">Todos</a>
          <a href="photos">Posts</a>
          <a href="albums">Albums</a>
          <a href="users">Users</a>
        </div>
        <div className="Quick-Links">
         <h3>Contacts</h3>
         <p>Adress : <br/> Lorem ipsum</p>
         <p>Phone :<br /> 0000000</p>
        </div>
      </div>
      <div>
        <p id="development"> Development By : <a href="https://www.linkedin.com/feed/" target="_blank">Burak Pancar</a></p>
      </div>
    </div>
  )
}

export default Footer
