let counter = 0 //Counter is the h1

const hl = document.querySelector("h1"); 
const button1 = document.querySelector("btnInc");
const button2 = document.querySelector("btnDec");


btnInc.addEventListener("click", () => {
  counter++; 
  hl.textContent = counter; 
}
); 

btnDec.addEventListener("click", () => {
  counter--; 
  hl.textContent = counter; 
}
); 
