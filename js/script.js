// Consegna

// Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.

// L’utente non può inserire più volte lo stesso numero.

// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente 
// un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile
// di numeri consentiti.

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero
// consentito.



// BONUS: (da fare solo se funziona tutto il resto) all’inizio il software richiede anche una difficoltà all’utente 
// che cambia il range di numeri casuali: 
// con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50

// Consigli del giorno:
//  :party_wizard: ****Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio: Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Proviamo prima con pochi numeri, inserire 84 numeri ogni volta potrebbe essere un po’ scocciante :occhiolino:
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve… :linguaccia:


//pensieri

// 16 random - 84 prompt(ciclo) con numero tra 1 e 100 e senza ripetizioni - ciclo si ferma quando si becca una mina

// ex

var RandomArray = [];

RandomArray = randomGen();
console.log(RandomArray);

var passi = [];

// ciclo principale per fare gli 84 tentativi
var max = 3;

for (var i = 0; i < max; i++){

    // input del numero
    passi.push(parseInt(input()));

    // ripetizione dell'input del numero se è già stato inserito
    if (i > 0){
        for (var j = 0; j < i; j++){
            while (passi[j] == passi[i]){
                passi[i] = (parseInt(input()));
            }
        }
    }

    // ricerca mina
    for (var z = 0; z < 16; z++){
        
        //ricerca numero uguale
        if (passi[i] == RandomArray[z]) {
            alert("Hai preso una mina, hai perso :( ");
            document.getElementById("demo").innerHTML = "Hai schivato " + i + " mine su 84."
            break;
        }

    }
    if (z == 16){
    alert("Mina schivata, prossimo passo");
    }

    if (i == max - 1) {
        document.getElementById("demo").innerHTML = "Hai vinto, davvero complimenti, VAI AL GIOCARE AL LOTTO, ORAAAAA"
    }

}

console.log(passi);

// funzioni

// funzione per i 16 numeri random
function randomGen(){

    var vet = [];

    // ciclo per generare i numeri random
    for (var i = 0;i < 16; i++){
       vet.push((Math.floor(Math.random() * 100) + 1));

       //ciclo per non ripetere lo stesso numero
       if (i > 0){
           for (var j = 0; j < i; j++){
               while (vet[j] == vet[i]){
                vet[i] = (Math.floor(Math.random() * 100) + 1);  
               }
           }
       }
    }

    return vet;
}

// funzione per il prompt
function input(){

    // ciclo che ripeterà il prompt finchè il numero non sarà compreso tra 1 e 100
    do{
        var n = prompt("Inserisci un numero da 1 a 100");
    } while ((n < 0) || (n > 100));

    return n;
}