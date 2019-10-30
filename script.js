// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
// se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


var nPc = [];

while (nPc.length < 16){
    var random = Math.floor(Math.random()*100)+ 1;
    if (!nPc.includes(random)){
        nPc.push(random);
      }
}

console.log(nPc);

var match = false;
var somma = 0;

while (match == false){
    var nUsr = parseInt(prompt("Inserisci un numero da 1 a 100"));
    if (nPc.includes(nUsr)) {
        alert ("Hai perso");
        match = true;
    } else {
        somma ++;
    }
}

document.writeln("Hai totalizzato " + somma + " punti")