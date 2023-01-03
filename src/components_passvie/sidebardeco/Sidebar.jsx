import React, { Component, useState } from 'react';
import "./Sidebar.css";
import { AiOutlineMenu } from "react-icons/ai";

export default class Sidebar extends Component {
  render() {
    const Header = () => {

      const [isOpen, setMenu] = useState(false);

      const toggleMenu = () => {
        setMenu(isOpen => !isOpen);
      }
    }

  
    return (
      <div className="header">
        <ul className="header-wrapper">
          <li><MenuIcon onClick={()=>toggleMenu()}></MenuIcon></li>
          <li><AiOutlineMenu/></li>
          <li>
            <Buttom
              variant="contained"
              color="secondary"
              size="small"
              style={buttonStyles}
              >
                
              </Buttom>
          </li>
        </ul>
        <ul className={isOpen ? "show-menu" : "hide-menu"}> 
                        <li >1</li>
                        <li >2</li>
                        <li >3</li>
                        <li >4</li>
                </ul>



        </div>


      
    )
  }
}
