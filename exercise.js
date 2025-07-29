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

// Dato un array di numeri, usa un ciclo for per calcolare e stampare la somma totale di tutti i valori.

{
    const numeri = [1, 2, 3, 4, 5];

    let som = 0;

    for (let i = 0; i < numeri.length; i++) {
        som += numeri[i];
    }

    console.log(som);

}

// Hai un array di oggetti, ognuno con un nome e un’età.
// Scrivi un algoritmo che trovi la persona più anziana (cioè con l’età più alta) e stampi il suo nome.

{
    const persone = [
        {
            name: "Paolo",
            eta: 40
        },
        {
            nome: "Sara",
            eta: 28
        },
        {
            nome: "Gianni",
            eta: 51
        }
    ];

    let personaGrande = persone[0]

    for (let i = 0; i < persone.length; i++) {
        if (persone[i].eta > personaGrande.eta) {
            personaGrande = persone[i]
        }


    }

    console.log(personaGrande.nome);


}

// Somma dei numeri da 1 a 100
// Scrivi un ciclo for che calcoli e stampi la somma di tutti i numeri da 1 a 100.

{
    let som = 0;

    for (let i = 1; i <= 100; i++) {
        som += i
    }

    console.log(som)
}

// Numeri pari da 1 a 50
// Scrivi un ciclo for che stampi solo i numeri pari compresi tra 1 e 50.

{
    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }

    }
}

// Funzione somma(a, b)
// Crea una funzione che accetta due numeri come parametri e restituisce la loro somma.

{
    function somma(a, b) {
        return a + b;
    }

    console.log(somma(5, 5));

}


// Tabellina del 7
// Scrivi un ciclo for che stampi la tabellina del 7, dalla moltiplicazione per 1 fino a 10.
// Esempio output:
// 7 x 1 = 7
// 7 x 2 = 14...
// 7 x 10 = 70

{
    for (let i = 1; i <= 10; i++) {
        console.log(`7 x ${i} =  ${7 * i}`)

    }
}

// Funzione isPari(numero)
//    Scrivi una funzione che ritorni true se il numero passato è pari, altrimenti false.

{
    function isPari(numero) {
        if (numero % 2 === 0) {
            return true;
        } else if (numero % 2 !== 0) {
            return false;

        }
    }
    console.log(isPari(2));
}

// Funzione media(array)
// Crea una funzione che prende in input un array di numeri e ritorna la media aritmetica.

{
    function media(array) {
        let somma = 0;
        for (let i = 0; i < array.length; i++) {
            somma += array[i]
        }
        return somma / array.length
    }

    const array = [2, 4, 6, 8, 10];
    console.log(media(array));

}

// Filtra numeri pari
// Usa .filter() per creare un nuovo array che contenga solo i numeri pari di un array di partenza.

{
    const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const numeriPari = numeri.filter(numero => numero % 2 === 0);
    console.log(numeriPari);
}

// Moltiplica per 2 ogni elemento
// Usa .map() per creare un nuovo array in cui ogni elemento è il doppio di quello originale.

{
    const numeri = [2, 4, 6, 8, 10];

    const numeriMolt = numeri.map(numero => numero * 2);
    console.log(numeriMolt);
}

// Somma tutti gli elementi
//  Usa .reduce() per calcolare la somma di tutti gli elementi in un array numerico.

{
    const numeri = [20, 25, 30, 35];
    const numeriSom = numeri.reduce((tot, valore) => (tot + valore));
    console.log(numeriSom);

}

// Oggetto persona
// Crea un oggetto chiamato persona con le proprietà: nome, cognome, eta.
// Stampa una frase come: "Ciao, mi chiamo Mario Rossi e ho 30 anni".

{
    const persona = {
        nome: "Fausto",
        cognome: "Bianchi",
        eta: 54
    }

    console.log(`Ciao, mi chiamo ${persona.nome} ${persona.cognome} e ho ${persona.eta} anni`);
}

// Filtro utenti maggiorenni
// Dato un array di oggetti con nome ed eta, usa .filter() per ottenere un nuovo array con solo gli utenti maggiorenni.

{

    const utenti = [
        { nome: "Alice", eta: 25 },
        { nome: "Bob", eta: 17 },
        { nome: "Carla", eta: 30 }
    ];

    const utentiMagg = utenti.filter(utente => utente.eta > 18)
    console.log(utentiMagg);

}


