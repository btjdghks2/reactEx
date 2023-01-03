import React, {  useState } from 'react';
import "./Sidebar.scss";
import { AiOutlineMenu } from "react-icons/ai";


export const Sidebar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className={menuOpen ? 'active' : ''}>
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
      </nav>

      <button onClick={()=> {setMenuOpen(menuOpen=> !menuOpen)}}> <AiOutlineMenu></AiOutlineMenu> </button>
    </div>
  )
}
