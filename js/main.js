/*Un alert() espone 5 numeri generati casualmente. (Decidete voi se debbano essere tutti diversi)
Non appena l'utente schiaccia "ok", parte un timer di 30 secondi. (Bonus: visualizzare il timer)
Al termine dei 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). (Bonus: far inserire i numeri da un form)
Dopo che sono stati inseriti i 5 numeri, il software mostra in un alert quanti e quali dei numeri da indovinare sono stati individuati. (Bonus: stampare in pagina il risultato, in alternativa all'alert.)
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
* Commentate il codice. */

// traccia

// 1. Generare 5 numeri randomici 
// 2. Inserire i 5 numeri generati in un alert
// 3. Far partire un timer di 30 secondi
// 4. Chidere in ordine i numeri all'utente
// 5. verificare quanti e quali numeri sono stati indovinati

// -------------SVOLGIMENTO----------------------------

//* array contenenti nuemeri randomici

var generatedNumber = [];

// generare i 5 numeri randomici

function randomNumberGeneration(num) {

    while (generatedNumber.length < 5) {
        var randomNumber = Math.floor(Math.random() * 100) + 1;
        if (!generatedNumber.includes(randomNumber)) {
            generatedNumber.push(randomNumber)
        }
    }
}

// invocazione funzione
randomNumberGeneration();
console.log(generatedNumber);