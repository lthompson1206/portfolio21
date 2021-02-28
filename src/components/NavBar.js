import React from "react";
import { NavLink } from  "react-router-dom";

import logo from "../assets/logo.png";

export default function NavBar() {
    return (
        <header className="bg-black">
            <div className="container mx-auto flex justify-between">
              <nav className="flex">
                  <NavLink to="/" 
                  exact
                  activeClassName="text-gray" 
                  className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-gold-800 text-4xl font-bold cursive tracking-widest">
                  <img className="logo" src="https://i.imgur.com/LPTZuOk.png" style={{"height" : "90px"}} alt=""/>
                  </NavLink>
                  <NavLink to="/about" 
                  className="inline-fle items-center py-3 px-3 my-6 rounded text-gray-400 hover:text-green-500"
                  activeClassName="text-red-100">
                    About Me
                  </NavLink>
                  <NavLink to="/post" 
                  className="inline-fle items-center py-3 px-3 my-6 rounded text-gray-400 hover:text-green-500" 
                  activeClassName="text-red-100">
                  Credentials
                  </NavLink>
                  <NavLink to="/project" 
                  className="inline-fle items-center py-3 px-3 my-6 rounded text-gray-400 hover:text-green-500"
                  activeClassName="text-red-100">
                    Projects
                  </NavLink>
                 
               
                 
                  </nav>  
                 
            </div>
        </header>
    )
    
}