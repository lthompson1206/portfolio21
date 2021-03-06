import React from "react"
import { SocialIcon } from "react-social-icons";

export default function Home() {
    return (
        <main>
          <img src="https://i.imgur.com/xHConqo.png" alt="the edge" className="absolute object-cover w-full h-full" />
             <div className="p-4  lg:pt-48 container mx-auto relative content-center">
             <h1 className="text-5xl text-gray-100 flex justify-center cursive">My Portfolio</h1>
        <h2 className="text-lg text-gray-100 flex justify-center mb-12">Welcome to my website all about me and my freelancing business as a developer</h2>
            <section className="bg-gray-200  rounded-lg shadow-2xl lg:flex p-10 opacity-70">
            <div class="flex flex-col ...">
            <div>
                <h1 className="text-5xl text-gray-900 font-serif">
              I am Raynell Thompson
                </h1>
                </div>
                <div>
               
                <p>
                I am a front-end software engineer in the NYC area specializing in building exceptional high quality web & mobile applications

Hardworking and creative developer that is passionate about building things with technology in general. An excellent team player and self starter.

I am a highly adept at conveying complex technical information to a variety of professional and laymens audiences in a clear and understandable manner.
                </p>
                </div>
            </div>
               
             
               
                {/* https://ivy555.medium.com/create-a-simple-portfolio-website-in-reactjs-48e0670364e7 */}
                
           
            <h1 className="text-gray-900 font-serif">
             
                </h1>
                {/* <p>
                    Shortly after attending South University for computer science, I completed a coding bootcamp at Rutgers University. Since then I've worked on a variety of projects
                </p> */}
            </section>
     
            </div>
            <div class="flex justify-center ...">
  <div><SocialIcon url="https://www.youtube.com/channel/UCG588cE4sQJEBULTxBAiH-g/featured" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} /></div>
  <div><SocialIcon url="https://github.com/lthompson1206/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} /></div>
  <div><SocialIcon url="https://www.linkedin.com/in/lamont-thompson-profile/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} /></div>
</div>
            
        </main>
        
    )
}