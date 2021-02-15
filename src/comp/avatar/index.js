import React from "react";

/* 	
  Function component
  Note the capitalized function name: 'Header', not 'header'
*/
function Avatar() {
  return (
    <div class="inline-block md:flex-shrink-0">
    <img 
    class="w-24 h-24 rounded-full" 
    src="https://i.imgur.com/hjqsipZ.png" 
    alt="" 
    width="384" 
    height="512"></img>
    </div>
  )
}
export default Avatar;