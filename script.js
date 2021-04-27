// Sull'evento onclick prima collegato, ora mettere nel console.log i dati presi dall'input utente
var bottoneGenera = document.getElementById("genera");

bottoneGenera.addEventListener("click", function (event) {
    event.preventDefault();
    var nomePasseggero = ""
    console.log(nomePasseggero);
    // 1 Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
    // 2 Il prezzo del biglietto è definito in base ai km (0.21 € al km),
    // va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.
    // Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
    var passeggero = document.getElementById("dataPassenger").value;
    console.log(passeggero);
    var percorrenza = document.getElementById("kilometers").value;
    var eta = document.getElementById("ageRange");

    var offerta = null;
    var numeroCarrozza = null;
    var codiceTreno = null;
    var prezzoAlKilometro = 0.21;
    var prezzoBigliettoSenzaSconto = prezzoAlKilometro * percorrenza;
    var costoBiglietto = null;

    var scritto = "Il prezzo del biglietto è "
    var euro =
        console.log(prezzoBigliettoSenzaSconto);


    if (eta <= 18) {
        document.getElementById('costo').innerHTML = "Il prezzo del biglietto è " + ((prezzoBigliettoSenzaSconto / 100) * 80) + " €";
    } else if (eta >= 65) {
        document.getElementById('costo').innerHTML = scritto + ((prezzoBigliettoSenzaSconto / 100) * 60) + euro;
    } else {
        document.getElementById('costo').innerHTML = scritto + (prezzoBigliettoSenzaSconto) + euro;
    }
});

