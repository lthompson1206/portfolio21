import React from "react";
import image from "../../assets/determined.svg";
import image2 from "../../assets/planner.svg";
import image3 from "../../assets/risktaker.svg";
import image4 from "../../assets/imaginative.svg";
import image5 from "../../assets/craveslearning.svg";
import image6 from "../../assets/selfpromoter.svg";
import image7 from "../../assets/acceptsfailure.svg";

/* 	
  Function component
  Note the capitalized function name: 'Header', not 'header'
*/
function Traits() {
  return (
    <div class="grid-cols-2">
    <figure class="md:flex bg-gray-100 squared-xl p-8 md:p-0">
    <div class="md:flex">

        <div class="ml-8 inline-block md:flex-shrink-0">
       
        <img 
        class="w-24 h-24 rounded-full" 
        src={image} 
        alt="" 
        width="384" 
        height="512"></img>
        </div>
        <div class="inline-block text-center sm:text-right">
            <p><strong>PERSISTENT & DETERMINED</strong></p>
            <p>Eyes always on the prize no matter the challenges</p>
            </div>
        </div>
    </figure>
    <div class="grid-cols-1">
    <figure class="md:flex bg-gray-100 squared-xl p-8 md:p-0">
    <div class="md:flex">

         <div class="ml-8 inline-block md:flex-shrink-0">
        
        <img 
        class="w-24 h-24 rounded-full" 
        src={image2} 
        alt="" 
        width="384" 
        height="512"></img>
        </div>
        <div class="inline-block text-center sm:text-right">
             <p><strong>PLANNER</strong></p>
             <p>Schedules & deadlines, but knows when to adjust</p>
             </div>
             </div>
    </figure>
    
    </div>
    <div class="grid-cols-1">
    <figure class="md:flex bg-gray-100 squared-xl p-8 md:p-0">
  <div class="md:flex">

         <div class="ml-8 inline-block md:flex-shrink-0">
        
        <img 
        class="w-24 h-24 rounded-full" 
        src={image3} 
        alt="" 
        width="384" 
        height="512"></img>
        </div>
        <div class="inline-block text-center sm:text-right">
             <p><strong>RISK TAKER</strong></p>
             <p>Not afraid to go all-in. Hope for the best but can deal with the worst</p>
             </div>
             </div>
    </figure>
    
    </div>
    
    <div class="grid-cols-1">
    <figure class="md:flex bg-gray-100 squared-xl p-8 md:p-0">
   <div class="md:flex">

         <div class="ml-8 inline-block md:flex-shrink-0">
        
        <img 
        class="w-24 h-24 rounded-full" 
        src={image4} 
        alt="" 
        width="384" 
        height="512"></img>
        </div>
        <div class="inline-block text-center sm:text-right">
             <p><strong>IMAGINATIVE</strong></p>
             <p>Thinks big from the beginning, Relishes challenging boundaries</p>
             </div>
             </div>
    </figure>
    
    </div>
    
    <div class="grid-cols-1">
    <figure class="md:flex bg-gray-100 squared-xl p-8 md:p-0">
   <div class="md:flex">
         <div class="ml-8 inline-block md:flex-shrink-0">
        
        <img 
        class="w-24 h-24 rounded-full" 
        src={image5} 
        alt="" 
        width="384" 
        height="512"></img>
        </div>
        <div class="inline-block text-center sm:text-right">
             <p><strong>CRAVES LEARNING</strong></p>
             <p>I am always looking to change or evolve to stay ahead of the curve</p>
             </div>
             </div>
    </figure>
    
    </div>
    
    <div class="grid-cols-1">
    <figure class="md:flex bg-gray-100 squared-xl p-8 md:p-0">
    <div class="md:flex">
         <div class="ml-8 inline-block md:flex-shrink-0">
        
        <img 
        class="w-24 h-24 rounded-full" 
        src={image6} 
        alt="" 
        width="384" 
        height="512"></img>
        </div>
        <div class="inline-block text-center sm:text-right">
             <p><strong>SMART SELF PROMOTER</strong></p>
             <p>Able to sell and tell my story. Enthusiastic.</p>
             </div>
             </div>
    </figure>
    
    </div>
    
    <div class="grid-cols-1">
    <figure class="md:flex bg-gray-100 squared-xl p-8 md:p-0">
    <div class="md:flex">
         <div class="ml-8 inline-block md:flex-shrink-0">
        
        <img 
        class="w-24 h-24 rounded-full" 
        src={image7} 
        alt="" 
        width="384" 
        height="512"></img>
        </div>
        <div class="inline-block text-center sm:text-right">
             <p><strong>ACCEPTS FAILURE</strong></p>
             <p>Uses failure as a learning experience, then improves</p>
             </div>
             </div>
    </figure>
    
    </div>
    
   
    
  </div>


  )
  

}
export default Traits;