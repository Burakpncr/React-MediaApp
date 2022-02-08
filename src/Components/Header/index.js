import {useState} from 'react'
import './Header.css'
import { AiOutlineMenu } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai"


function Header() {
  const [openMenu, setopenMenu] = useState(false)
  return (
    <div className="Header-Container">
      <div className="Header-Wrapper">
      <div className="logo">
       <h1> ActionPost </h1>
      </div>
      <div className="Menu">
        <div className="Nav-icon"> 
        {
          openMenu ?
             <div className="Hamburger-Menu"> 
             <button className="hamburger-icon" onClick={() => setopenMenu(false)}><AiOutlineClose /></button> 
            <li>  <a className="active_link" href='/' > Home </a> </li>
             <a href="todos"> Todos </a>
             <a href="posts"> Posts </a>
             <a href="albums"> Albums </a>
             <a href="login"> Users </a>
             </div> 
           : 
           <button className="hamburger-icon" onClick={() => setopenMenu(true)}><AiOutlineMenu /></button> 
        }
        </div>
        <div className="Link">
        <a className="active_link" href="/"> Home </a>
        <a href="todos"> Todos </a>
        <a href="posts"> Posts </a>
        <a href="albums"> Albums </a>
        <a href="login"> Users </a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header
