import React from "react";
import { NavLink } from  "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-blue-900">
            <div className="container mx-auto flex justify-between">
              <nav className="flex">
                  <NavLink to="/" 
                  exact
                  activeClassName="text-gray" 
                  className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-gold-800 text-4xl font-bold cursive tracking-widest">
                    Lamont 
                  </NavLink>
                  <NavLink to="/post" 
                  className="inline-fle items-center py-3 px-3 my-6 rounded text-gray-400 hover:text-green-800" 
                  activeClassName="text-red-100 bg-gray-400">
                   Blog Posts
                  </NavLink>
                  <NavLink to="/project" 
                  className="inline-fle items-center py-3 px-3 my-6 rounded text-gray-400 hover:text-green-800"
                  activeClassName="text-red-100 bg-gray-400">
                    Project
                  </NavLink>
                  <NavLink to="/about" 
                  className="inline-fle items-center py-3 px-3 my-6 rounded text-gray-400 hover:text-green-800"
                  activeClassName="text-red-100 bg-gray-400">
                    About Me!
                  </NavLink>
                 
                  </nav>  
                  <div className="inline-flex py-3 px-3 mr-6">

<SocialIcon url="https://www.youtube.com/channel/UCG588cE4sQJEBULTxBAiH-g/featured" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
<SocialIcon url="https://www.instagram.com/trapnerd_consulting/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
<SocialIcon url="https://www.linkedin.com/in/lamont-thompson-profile/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                  </div>
            </div>
        </header>
    )
    
}