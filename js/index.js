var logo = document.querySelector(".logo");
// hier selecteer je de image
console.log(logo);
document.onkeypress = function(event) {
// hier activeer je een functie op basis een keypress, die nog niet gedefinieert
	console.log("hello", event.keyCode);
   if (event.keyCode == 108) {
// als de key L is, daar staat 76 voor, voer dan de volgende functie uit
	   console.log("you here");
      logo.classList.add("logo-animate");   
// hier wordt een class aan het logo toegevoegd
   }
//
setTimeout( function() {
logo.classList.remove("logo-animate");
}, 5000);
// de toegevoegde class wordt weer weggehaald na 5 seconde, even lang als de animatie
}
// wanneer de class niet weggehaald wordt zou de functie niet opnieuw kunnen runnen

// Bronnen:

//https://stackoverflow.com/questions/14735197/activate-a-javascript-function-with-a-keypress

//https://keycode.info/

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout 