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
    <figure class="md:flex bg-gray-100 squared-xl p-8 md:p-0">
    <div class="md:flex">
       
        <div class="text-center sm:text-left">
            <p class="text-right"><strong>BASIC CODING SKILLS</strong></p>
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
    <figure class="md:flex bg-gray-100 squared-xl p-8 md:p-0">
    <div class="md:flex">
       
    <div class="text-center sm:text-left">
    <p class="text-right"><strong>WIREFRAMING</strong></p>
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
    <figure class="md:flex bg-gray-100 squared-xl p-8 md:p-0">
    <div class="md:flex">
       
    <div class="text-center sm:text-left">
             <p class="text-right"><strong>CAN MAKE DATA-DRIVEN DECISIONS</strong></p>
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
    <figure class="md:flex bg-gray-100 squared-xl p-8 md:p-0">
    <div class="md:flex">
        
    <div class="text-center sm:text-left">
             <p class="text-right"><strong>ACCOUNTING AND BOOKKEEPING</strong></p>
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
    <figure class="md:flex bg-gray-100 squared-xl p-8 md:p-0">
    <div class="md:flex">
        
    <div class="text-center sm:text-left">
             <p class="text-right"><strong>ARTICULATE COMMUNICATION</strong></p>
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
    <figure class="md:flex bg-gray-100 squared-xl p-8 md:p-0">
    <div class="md:flex">
       
    <div class="text-center sm:text-left">
             <p class="text-right"><strong>DIGITAL MARKETING</strong></p>
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
    <figure class="md:flex bg-gray-100 squared-xl p-8 md:p-0">
    <div class="md:flex">
       
    <div class="text-center sm:text-left">
             <p class="text-right"><strong>BUSINESS ADMIN AND PLANNING</strong></p>
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
  
 

