var countDownDate = new Date("May 13, 2023").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = days + " giorni " + hours + " ore " + minutes + " minuti " + seconds + " secondi ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "ATTESA TERMINATA: RISULTATI ESTRAZIONE USCITI";
    }

}, 1000);
