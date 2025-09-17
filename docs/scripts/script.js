document.addEventListener("DOMContentLoaded", () => {
   console.log("document succesfully loaded, baby");
   
   document.getElementById('btnClicky').addEventListener('click', btnClicky); 
 }
);

function btnClicky () {
  console.log('in btnClicky event');
  document.getElementById('btnClicky').style.transform = 'rotate(15deg)'
  console.log('after rotation');
}


// const btnClicky = document.getElementById('btnClicky'); btnClicky.addEventListener('click', () => { // ...now do DOM stuff });

document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('theme-alt');
      console.log('Theme toggled');
    });
  }
});
