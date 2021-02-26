import React from "react";
import image from "../../assets/avatar.jpg" 

/* 	
  Function component
  Note the capitalized function name: 'Header', not 'header'
*/
function Avatar() {
  return (
    <div class="inline-block md:flex-shrink-0 md:flex ">
    <img 
    class="w-78 h-400 square-full" 
    src={image}
    alt="" 
    width="384" 
    height="512"></img>
    </div>
  )
}
export default Avatar;