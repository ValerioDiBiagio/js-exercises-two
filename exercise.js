// Scrivi una funzione chiamata contaVocali che prende una stringa e restituisce il numero di vocali presenti (a, e, i, o, u, anche maiuscole).

{

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

}

// Dato l’array:
// const colori = ["rosso", "verde", "blu", "giallo"];
// Stampa il numero totale di elementi contenuti nell’array.

{
    const colori = ["rosso", "verde", "blu", "giallo"];
    console.log(colori.length);
}

// Crea un oggetto chiamato persona con tre proprietà: nome, eta, professione
// Poi, stampa solo il nome della persona

{
    const persona = {
        nome: "Gianpietro",
        eta: 56,
        professione: "Autista"
    }

    console.log(persona.nome);

}

// Dato un array di numeri, crea un nuovo array con ogni numero moltiplicato per 2.

{
    const numeri = [2, 3, 4, 5, 6];
    const numeriMolt = numeri.map(numero => numero * 2);
    console.log(numeriMolt);
}

// Usa .filter() per ottenere un nuovo array contenente solo i numeri pari da un array di numeri.

{
    const numeri = [10, 15, 20, 25, 30];
    const numeriPari = numeri.filter(numero => numero % 2 === 0);
    console.log(numeriPari);

}

// Hai un array di oggetti, ognuno con un nome e un’età.
// Devi creare un nuovo array che contiene solo i nomi.

{
    const persone = [
        {
            nome: "Mauro",
            eta: 45
        },
        {
            nome: "Stefano",
            eta: 23
        },
        {
            nome: "Simone",
            eta: 35
        }
    ]

    const soloNomi = persone.map(persona => persona.nome);
    console.log(soloNomi);

}