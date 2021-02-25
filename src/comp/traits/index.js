import React from "react";

/* 	
  Function component
  Note the capitalized function name: 'Header', not 'header'
*/
function Traits() {
  return (
    <div class="grid-cols-2">
    <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
    <div class="md:flex">

        <div class="ml-8 inline-block md:flex-shrink-0">
        <i class="fas fa-mountain #6DB65B fa-6x icon-a" style={{color: "orange"}}></i>
        {/* <img 
        class="w-24 h-24 rounded-full" 
        src="https://i.imgur.com/VTXI4By.png" 
        alt="" 
        width="384" 
        height="512"></img> */}
        </div>
        <div class="inline-block text-center sm:text-right">
            <p><strong>PERSISTENT & DETERMINED</strong></p>
            <p>Eyes always on the prize no matter the challenges</p>
            </div>
        </div>
    </figure>
    <div class="grid-cols-1">
    <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
    <div class="md:flex">

         <div class="ml-8 inline-block md:flex-shrink-0">
         <i class="fas fa-calendar-alt fa-6x"style={{color: "gray"}}></i>
        {/* <img 
        class="w-24 h-24 rounded-full" 
        src="https://i.imgur.com/VTXI4By.png" 
        alt="" 
        width="384" 
        height="512"></img> */}
        </div>
        <div class="inline-block text-center sm:text-right">
             <p><strong>PLANNER</strong></p>
             <p>Schedules & deadlines, but knows when to adjust</p>
             </div>
             </div>
    </figure>
    
    </div>
    <div class="grid-cols-1">
    <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
  <div class="md:flex">

         <div class="ml-8 inline-block md:flex-shrink-0">
         <i class="fas fa-dice-three fa-6x" style={{color: "green"}}></i>
        {/* <img 
        class="w-24 h-24 rounded-full" 
        src="https://i.imgur.com/VTXI4By.png" 
        alt="" 
        width="384" 
        height="512"></img> */}
        </div>
        <div class="inline-block text-center sm:text-right">
             <p><strong>RISK TAKER</strong></p>
             <p>Not afraid to go all-in. Hope for the best but can deal with the worst</p>
             </div>
             </div>
    </figure>
    
    </div>
    
    <div class="grid-cols-1">
    <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
   <div class="md:flex">

         <div class="ml-8 inline-block md:flex-shrink-0">
         <i class="fas fa-lightbulb fa-6x" style={{color: "gray"}}></i>
        {/* <img 
        class="w-24 h-24 rounded-full" 
        src="https://i.imgur.com/VTXI4By.png" 
        alt="" 
        width="384" 
        height="512"></img> */}
        </div>
        <div class="inline-block text-center sm:text-right">
             <p><strong>IMAGINATIVE</strong></p>
             <p>Thinks big from the beginning, Relishes challenging boundaries</p>
             </div>
             </div>
    </figure>
    
    </div>
    
    <div class="grid-cols-1">
    <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
   <div class="md:flex">
         <div class="ml-8 inline-block md:flex-shrink-0">
         <i class="fas fa-book fa-6x" style={{color: "yellow"}}></i>
        {/* <img 
        class="w-24 h-24 rounded-full" 
        src="https://i.imgur.com/VTXI4By.png" 
        alt="" 
        width="384" 
        height="512"></img> */}
        </div>
        <div class="inline-block text-center sm:text-right">
             <p><strong>CRAVES LEARNING</strong></p>
             <p>I am always looking to change or evolve to stay ahead of the curve</p>
             </div>
             </div>
    </figure>
    
    </div>
    
    <div class="grid-cols-1">
    <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
    <div class="md:flex">
         <div class="ml-8 inline-block md:flex-shrink-0">
         <i class="fas fa-desktop fa-6x" style={{color: "blue"}}></i>
        {/* <img 
        class="w-24 h-24 rounded-full" 
        src="https://i.imgur.com/VTXI4By.png" 
        alt="" 
        width="384" 
        height="512"></img> */}
        </div>
        <div class="inline-block text-center sm:text-right">
             <p><strong>SMART SELF PROMOTER</strong></p>
             <p>Able to sell and tell my story. Enthusiastic.</p>
             </div>
             </div>
    </figure>
    
    </div>
    
    <div class="grid-cols-1">
    <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
    <div class="md:flex">
         <div class="ml-8 inline-block md:flex-shrink-0">
         <i class="fas fa-circle fa-6x" style={{color: "orange"}}></i>
        {/* <img 
        class="w-24 h-24 rounded-full" 
        src="https://i.imgur.com/VTXI4By.png" 
        alt="" 
        width="384" 
        height="512"></img> */}
        </div>
        <div class="inline-block text-center sm:text-right">
             <p><strong>ACCEPTS FAILURE</strong></p>
             <p>Uses failure as a learning experience, then improves</p>
             </div>
             </div>
    </figure>
    
    </div>
    
   
    
  </div>

    // <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
    //     <div class="grid-cols-1">
       
    //    <div class="pt-6 md:p-1 text-center md:text-right space-y-1">
    //    <img class="w-24 h-24 rounded-full" src="https://i.imgur.com/VTXI4By.png" alt="" width="384" height="512"></img>
    //      <blockquote>
    //      <p className="text-lg font-semibold">
    //      PERSISTENT & DETERMINED
    //        </p>
    //      </blockquote>
    //      <figcaption class="font-medium">
    //      <div class="text-gray-500">
    //      Eyes always on the prize no matter the challenges
    //        </div>
    //      </figcaption>
        
    //      {/* <div class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" alt="" width="384" height="512">
    //      <i class="fas fa-laptop-code fa-6x" style={{color: "grey"}} ></i>
    //      </div> */}
  
    // </div>
   
    //    <div class="grid-rows-1 md:text-left space-y-1">
    //        <div class="grid-cols-2">
    //            <div>
    //            <img class="w-24 h-24 rounded-full" src="https://i.imgur.com/VTXI4By.png" alt="" width="384" height="512"></img>
    //            </div>
          
        
        
    //      <blockquote>
    //      <p className="text-lg font-semibold">
    //      PERSISTENT & DETERMINED
    //        </p>
    //      </blockquote>
    //      <div class="text-gray-500">
    //      Eyes always on the prize no matter the challenges
    //        </div>
         
    //        </div>
       
  
    // </div>
    //     </div>
     

    // </figure>
 


//       <div>
//           <h1>Traits</h1>;
//   <div>
//       <i class="fas fa-mountain #6DB65B fa-6x icon-a" style={{color: "blue"}}></i>
//   <h1 className="font-semibold">PERSISTENT & DETERMINED</h1>
//   <p>Eyes always on the prize no matter the challenges</p>
//   </div>;
//     <div>
//         <i class="fas fa-calendar-alt fa-6x"style={{color: "blue"}}></i>
//         <h1 className="font-semibold">PLANNER</h1>
//               <p>Schedules & deadlines, but knows when to adjust</p>
//     </div>;
//     <div>
//         <i class="fas fa-dice-three fa-6x" style={{color: "blue"}}></i>
//          <h1 className="font-semibold">RISK TAKER</h1>
//               <p>Not afraid to go all-in. Hope for the best but can deal with the worst</p>
//     </div>;
//     <div>
//         <i class="fas fa-lightbulb fa-6x" style={{color: "blue"}}></i>
//        <h1 className="font-semibold">IMAGINATIVE</h1>
//               <p>Thinks big from the beginning, Relishes challenging boundaries</p> 
//     </div>;
//     <div>
//         <i class="fas fa-book fa-6x" style={{color: "blue"}}></i>
//        <h1 className="font-semibold">CRAVES LEARNING</h1>
//               <p>I am always looking to change or evolve to stay ahead of the curve</p> 
//     </div>;
//     <div>
//         <i class="fas fa-desktop fa-6x" style={{color: "blue"}}></i>
//          <h1 className="font-semibold">SMART SELF-PROMOTER</h1>
//               <p>Able to sell and tell my story. Enthusiastic.</p>
//     </div>;
//     <div>
//         <i class="fas fa-circle fa-6x" style={{color: "blue"}}></i>
//         <h1 className="font-semibold">ACCEPTS FAILURE</h1>
//               <p>Uses failure as a learning experience, then improves</p> 
//     </div>;

//       </div>
  )
  

}
export default Traits;