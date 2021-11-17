
const numberToGuess = Math.floor(Math.random()*100 + 1);
console.log(numberToGuess)
let brojac = 1;

function pogađanje () {
  let userGuess = document.getElementById("input").value;

  if(userGuess < numberToGuess) {
    document.getElementById("paragraph").innerHTML = 'Traženi broj je veći od unesenog';
    brojac++;
    console.log('Traženi broj je veći od unesenog');
  } else if (userGuess > numberToGuess) {
    document.getElementById("paragraph").innerHTML = 'Traženi broj je manji od unesenog';
    brojac++;
    console.log('Traženi broj je manji od unesenog');
  } else if(userGuess == numberToGuess) {
    document.getElementById("paragraph").innerHTML = `Čestitamo, pogodili ste zamišljeni broj iz ${brojac}. puta!`;
    console.log(`Čestitamo, pogodili ste zamišljeni broj iz ${brojac}. puta!`)
  } else{
    window.alert('Please enter a number not a string');
    console.log('Please enter a number not a string')
  } 
};

document.getElementById("button").onclick = pogađanje;