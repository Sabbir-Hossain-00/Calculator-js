const allButton = document.querySelectorAll(".p-1");
const display = document.getElementById("display");
const clearOneBtn = document.getElementById("clearOne");
const clearAllBtn = document.getElementById("clearAll");
const calcBtn = document.getElementById("calcBtn");
const parcent = document.getElementById("parcent");



   for(let button of allButton){
    button.addEventListener("click",()=>{
        display.value += button.innerHTML ;
    });
   }

   clearOneBtn.addEventListener("click",()=>{
       let str = display.value ;
       let newStr = str.slice(0,-1);
       display.value = newStr ;
   });

   clearAllBtn.addEventListener("click",()=>{
       display.value = ""
   });

   calcBtn.addEventListener("click",()=>{
    display.value = eval(display.value);
    
   });


   
    

  