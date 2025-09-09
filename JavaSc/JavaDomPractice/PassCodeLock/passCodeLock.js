
let mainText = document.getElementById("esh1"); 
let enterPass = document.getElementById("inpPass"); 
let testPass = document.getElementById("testPass"); 
let button1 = document.getElementById("bttn1"); 
let button2 = document.getElementById("bttn2"); 


let userSet = ""; 
let att = 3; 

button1.addEventListener("click", () => {
  userSet = enterPass.value.trim(); 
  mainText.textContent = userSet; 
}
); 

button2.addEventListener("click", () => {
  let userInput = testPass.value.trim(); 
  if (userInput === userSet) {
    mainText.textContent = "Correct Password!";
  } 
  
  else {
    att--;
    if (att > 0) {
      mainText.textContent = `Wrong Password. ${att} attempts left`;
    } else {
      mainText.textContent = "No attempts left. Access Denied.";
      button2.disabled = true; // disable further tries
    }
  }
});