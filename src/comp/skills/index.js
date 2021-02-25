import React from "react";
import image_ from "../../assets/code.png"
import image from "../../assets/wireframing.svg";
import image2 from "../../assets/data.svg";
import image3 from "../../assets/bookkeeping.svg";
import image4 from "../../assets/communication.svg";
import image5 from "../../assets/marketing.svg";
import image6 from "../../assets/business.svg";

/* 	
  Function component
  Note the capitalized function name: 'Header', not 'header'
*/
function Skills() {
  return (
   
   
<div class="grid-cols-2">
    <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
    <div class="md:flex">
       
        <div class="text-center sm:text-left">
            <p class="text-right">BASIC CODING SKILLS</p>
            <p class="text-right">Knows how to build tech from fundamental coding languages</p>
            </div>
            <div class="ml-8 inline-block md:flex-shrink-0">
        <img 
        class=" w-24 h-24 rounded-full" 
        src={image_} 
        alt="" 
        width="384" 
        height="512"></img>
        </div>
        </div>
    </figure>
    <div class="grid-cols-2">
    <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
    <div class="md:flex">
       
    <div class="text-center sm:text-left">
    <p class="text-right">WIREFRAMING</p>
             <p class="text-right">Ready to architect the next great digital experience</p>
             </div>
             <div class="ml-8 inline-block md:flex-shrink-0">
        <img 
        class="w-24 h-24 rounded-full" 
        src={image} 
        alt="" 
        width="384" 
        height="512"></img>
        </div>
             </div>
    </figure>
    
    </div>
    <div class="grid-cols-2">
    <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
    <div class="md:flex">
       
    <div class="text-center sm:text-left">
             <p class="text-right">CAN MAKE DATA-DRIVEN DECISIONS</p>
             <p class="text-right">Defers to the data over intuition whenever possible</p>
             </div>
             <div class="ml-8 inline-block md:flex-shrink-0">
        <img 
        class="w-24 h-24 rounded-full" 
        src={image2} 
        alt="" 
        width="384" 
        height="512"></img>
        </div>
             </div>
    </figure>
    
    </div>
    
    <div class="grid-cols-2">
    <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
    <div class="md:flex">
        
    <div class="text-center sm:text-left">
             <p class="text-right">ACCOUNTING AND BOOKKEEPING</p>
             <p class="text-right">Meticulous, disciplined and organized when it comes to numbers</p>
             </div>
             <div class="ml-8 inline-block md:flex-shrink-0">
        <img 
        class="w-24 h-24 rounded-full" 
        src={image3}
        alt="" 
        width="384" 
        height="512"></img>
        </div>
             </div>
    </figure>
    
    </div>
    
    <div class="grid-cols-2">
    <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
    <div class="md:flex">
        
    <div class="text-center sm:text-left">
             <p class="text-right">ARTICULATE COMMUNICATION</p>
             <p class="text-right">Always succeeds in being clear, no matter the audience</p>
             </div>
             <div class="ml-8 inline-block md:flex-shrink-0">
        <img 
        class="w-24 h-24 rounded-full" 
        src={image4}
        alt="" 
        width="384" 
        height="512"></img>
        </div>
             </div>
    </figure>
    
    </div>
    
    <div class="grid-cols-2">
    <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
    <div class="md:flex">
       
    <div class="text-center sm:text-left">
             <p class="text-right">DIGITAL MARKETING</p>
             <p class="text-right">Knows implicitly that great products need great strategies</p>
             </div>
             <div class="ml-8 inline-block md:flex-shrink-0">
        <img 
        class="w-24 h-24 rounded-full" 
        src={image5} 
        alt="" 
        width="384" 
        height="512"></img>
        </div>
             </div>
    </figure>
    
    </div>
    
    <div class="grid-cols-2">
    <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
    <div class="md:flex">
       
    <div class="text-center sm:text-left">
             <p class="text-right">BUSINESS ADMIN AND PLANNING</p>
             <p class="text-right">Knows how to run a business top to bottom</p>
             </div>
             <div class="ml-8 inline-block md:flex-shrink-0">
        <img 
        class="w-24 h-24 rounded-full" 
        src={image6} 
        alt="" 
        width="384" 
        height="512"></img>
        </div>
             </div>
    </figure>
    
    </div>
  </div>
)
   
}
export default Skills;
  
 
  
  // <div>
  //   <i class="fas fa-laptop-code fa-6x" style={{color: "grey"}} ></i>
  //   <h1 className="font-semibold">BASIC CODING SKILLS</h1>
  // <p class="text-right">Knows how to build tech from fundamental coding languages</p></div>;
  // <div>
  //   <i class="fas fa-calculator fa-6x" style={{color: "grey"}} ></i>
  //    <h1 className="font-semibold">WIREFRAMING</h1>
  //             <p>Ready to architect the next great digital experience</p>
  // </div>;
  // <div>
  //   <i class="fas fa-calculator fa-6x" style={{color: "grey"}} ></i>
  //   <h1 className="font-semibold">CAN MAKE DATA-DRIVEN DECISIONS</h1>
  //             <p>Defers to the data over intuition whenever possible</p>
  // </div>;
  // <div>
  //   <i class="fas fa-cloud fa-6x" style={{color: "grey"}}></i>
  //   <h1 className="font-semibold">ACCOUNTING AND BOOKKEEPING</h1>
  //             <p>Meticulous, disciplined and organized when it comes to numbers</p>
  // </div>;
  // <div>
  //   <i class="fas fa-comments-dollar fa-6x" style={{color: "grey"}}></i>
  //   <h1 className="font-semibold">ARTICULATE COMMUNICATION</h1>
  //             <p>Always succeeds in being clear, no matter the audience</p>
  // </div>;
  // <div>
  //   <i class="fas fa-circle fa-6x" style={{color: "grey"}}></i>
  //    <h1 className="font-semibold">DIGITAL MARKETING</h1>
  //             <p>Knows implicitly that great products need great strategies</p>
  // </div>;
  // <div>
  //   <i class="fas fa-building fa-6x" style={{color: "grey"}}></i>
  //    <h1 className="font-semibold">BUSINESS ADMIN AND PLANNING</h1>
  //             <p>Knows how to run a business top to bottom</p>
  // </div>

// Function components which use an arrow function syntax are also valid
// const Header = () => <h1>Hello React</h1>;

// /* 
//   Class component
//   Class components have more boilerplate (note the 'extends' keyword and 'render' method)
// */
// class Header extends React.Component {
//   render() {
//     return <h1>Hello React</h1>;
//   }
