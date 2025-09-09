
let mainText = document.getElementById("esh1"); 
let enterPass = document.getElementById("inpPass"); 
let testPass = document.getElementById("testPass"); 
let button1 = document.getElementById("bttn1"); 
let button2 = document.getElementById("bttn2"); 


let userSet = ""; 

button1.addEventListener("click", () => {
  userSet = enterPass.value.trim(); 
  mainText.textContent = userSet; 
}
); 

button2.addEventListener("click", () => {
  let userInput = testPass.value.trim(); 
  if(userInput === userSet){
    mainText.textContent = "Correct Password!"; 
  }
  else{
    mainText.textContent = "Wrong Password"; 
  }



}); 
