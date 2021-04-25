
// Sull'evento onclick prima collegato, ora mettere nel console.log i dati presi dall'input utente
var bottoneGenera = document.getElementById("genera");

bottoneGenera.addEventListener("click", function(event) {
    document.getElementById("data").value = "";
    var nomePasseggero = ""
    console.log(nomePasseggero)
});

// 1 Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.