// Scrivi una funzione chiamata contaVocali che prende una stringa e restituisce il numero di vocali presenti (a, e, i, o, u, anche maiuscole).

function contaVocali(word) {
    let count = 0;
    const vocali = "aeiouAEIOU"

    for (let i = 0; i < word.length; i++) {

        if (vocali.includes(word[i])) {
            count++;
        }
    }
    return count;
}

console.log(contaVocali("Ciao"));