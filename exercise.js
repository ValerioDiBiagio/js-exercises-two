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

// Cerca utente per nome (con .find())
// Hai un array di oggetti con nome ed email.
// Scrivi una funzione trovaUtente(nome) che ritorni l'oggetto utente con quel nome usando .find().

{
    const utenti = [
        { nome: "Lucia", email: "lucia@example.com" },
        { nome: "Giovanni", email: "giovanni@example.com" },
        { nome: "Laura", email: "laura@example.com" }
    ];


    function trovaUtente(nome) {
        return utenti.find(utente => utente.nome === nome)
    }

    console.log(trovaUtente("Giovanni"));
}

// Dato un array di numeri, crea un nuovo array che contenga solo i numeri pari usando .filter()

{
    const numeri = [1, 2, 3, 4, 5, 6];
    const numeriPari = numeri.filter(numero => numero % 2 === 0);
    console.log(numeriPari);

}

// Usando .reduce(), calcola la somma di tutti i numeri dell'array.

{
    const numeri = [1, 2, 3, 4, 5, 6];
    const numeriSom = numeri.reduce((tot, valore) => (tot + valore), 0);
    console.log(numeriSom);

}


// Dato un array di oggetti prodotto con proprietà nome e prezzo, restituisci solo i prodotti con prezzo superiore a 50.

{

    const prodotto = [
        {
            nome: "Monitor",
            prezzo: 150

        },
        {
            nome: "Tv",
            prezzo: 550

        },
        {
            nome: "Stereo",
            prezzo: 30

        }
    ]

    const prodottiCostosi = prodotto.filter(prod => prod.prezzo > 50);
    console.log(prodottiCostosi);

}

// Usando .map(), crea un array contenente solo i nomi dei prodotti.


{
    const prodotti = [
        { nome: "Maglietta", prezzo: 20 },
        { nome: "Pantaloni", prezzo: 60 },
        { nome: "Scarpe", prezzo: 100 }
    ];

    const nomiProd = prodotti.map(prodotto => prodotto.nome);
    console.log(nomiProd);

}

// Usando .reduce(), calcola la somma dei prezzi di tutti i prodotti.

{
    const prodotti = [
        { nome: "Maglietta", prezzo: 20 },
        { nome: "Pantaloni", prezzo: 60 },
        { nome: "Scarpe", prezzo: 100 }
    ];

    const prodPrezzi = prodotti.reduce((tot, prodotti) => (tot + prodotti.prezzo), 0);
    console.log(prodPrezzi);

}

// Scrivi una funzione che accetta un array di numeri e restituisce la somma di tutti gli elementi.

{
    const numeri = [10, 25, 5, 40, 15];

    function sumArray(array) {

        let sum = 0;

        for (let i = 0; i < array.length; i++) {
            sum += array[i]
        }

        return sum;


    }

    console.log(sumArray(numeri));

}


// Hai un array di oggetti che rappresentano dei prodotti. Filtra l'array per ottenere solo i prodotti il cui prezzo è superiore a 20.

{
    const prodotti = [
        {
            nome: "Penna",
            prezzo: 5
        },
        {
            nome: "Radio",
            prezzo: 25
        },
        {
            nome: "Sedia",
            prezzo: 60
        },
        {
            nome: "Matita",
            prezzo: 2
        },
    ];

    const prodottiCostosi = prodotti.filter(prodotto => prodotto.prezzo > 20);
    console.log(prodottiCostosi);

}


// Partendo dall'array di prodotti dell'esercizio precedente, crea un nuovo array contenente solo i nomi dei prodotti.

{
    const prodotti = [
        {
            nome: "Penna",
            prezzo: 5
        },
        {
            nome: "Radio",
            prezzo: 25
        },
        {
            nome: "Sedia",
            prezzo: 60
        },
        {
            nome: "Matita",
            prezzo: 2
        },
    ];

    const nomeProd = prodotti.map(prodotto => prodotto.nome);
    console.log(nomeProd);

}


// Scrivi una funzione che, dato un array di oggetti utenti e un id, restituisce l'oggetto utente corrispondente a quell'id. 
// Se l'utente non viene trovato, restituisce null.

{
    const utenti = [
        {
            nome: "Luca",
            id: 1
        },
        {
            nome: "Marco",
            id: 2
        },
        {
            nome: "Stefano",
            id: 3
        },
        {
            nome: "Mattia",
            id: 4
        },
    ];

    function utentiId(arr, idCercato) {
        const utenteTrovato = arr.find(utente => utente.id === idCercato);
        return utenteTrovato || null
    }

    console.log(utentiId(utenti, 3));

}

// Scrivi una funzione che, dato un array di numeri e un valore da rimuovere, restituisce un nuovo array senza tutte le occorrenze di quel valore.

{
    const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function rimuoviNum(arr, valoreRim) {
        return valoreDaRimuovere = arr.filter(numero => numero !== valoreRim);
    }

    console.log(rimuoviNum(numeri, 2));

}

// Scrivi un ciclo for che itera da 1 a 20 e calcola la somma di tutti i numeri pari.

{
    let sommaPari = 0;

    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            sommaPari += i
        }

    }

    console.log(sommaPari);

}

// Scrivi un ciclo for che, data una stringa e un carattere, conti quante volte quel carattere appare nella stringa. 
// La funzione dovrà restituire il conteggio.

{
    const stringa = "Ciao, mi chiamo Luca";
    const carattere = "a";

    let conteggio = 0;

    for (let i = 0; i < stringa.length; i++) {
        if (stringa[i] === carattere) {
            conteggio++;
        }
    }

    console.log(carattere, conteggio)

}

// Scrivi una funzione chiamata trovaMaggiore che accetta due numeri come argomenti e restituisce il numero più grande tra i due.

{

    function trovaMaggiore(num1, num2) {
        if (num1 > num2) {
            return num1;
        } else {
            return num2
        }
    }

    console.log(trovaMaggiore(3, 6));

}

// Partendo da un array di oggetti che rappresentano studenti, usa il metodo filter() per ottenere solo gli studenti che hanno superato l'esame (voto >= 60). 
// Successivamente, usa il metodo map() sul risultato per creare un nuovo array contenente solo i nomi di questi studenti.

{
    const studenti = [
        { nome: 'Luca', voto: 85 },
        { nome: 'Giulia', voto: 55 },
        { nome: 'Marco', voto: 72 },
        { nome: 'Anna', voto: 91 },
        { nome: 'Paolo', voto: 48 }
    ];

    const esameSuperato = studenti.filter(studente => studente.voto > 60);
    console.log(esameSuperato);

    const NomeUtentiEsameSuperato = esameSuperato.map(studente => studente.nome);
    console.log(NomeUtentiEsameSuperato);
}

// Dato un array di prezzi, usa il metodo reduce() per calcolare il costo totale di tutti gli articoli.

{
    const prezzi = [12.99, 5.50, 24.00, 8.75];

    const costoTot = prezzi.reduce((tot, prezzo) => tot + prezzo);
    console.log(costoTot);

}

//  Usa il metodo map() per creare un nuovo array in cui ogni numero dell'array originale è stato moltiplicato per 2.


{
    const numeri = [2, 4, 6, 8, 10];

    const numeriDoppi = numeri.map(numero => numero * 2);
    console.log(numeriDoppi);

}

//  Usa il metodo filter() per creare un nuovo array contenente solo i prodotti il cui prezzo è superiore a 50.

{
    const prodotti = [
        {
            nome: "Telefono",
            prezzo: 450
        },
        {
            nome: "Stereo",
            prezzo: 150
        },
        {
            nome: "Aspirapolvere",
            prezzo: 250
        },
        {
            nome: "Caricatore",
            prezzo: 20
        },
        {
            nome: "Videogioco",
            prezzo: 40
        }
    ]

    const prodottiFiltrati = prodotti.filter(prodotto => prodotto.prezzo > 50);
    console.log(prodottiFiltrati);
}

// Usa il metodo reduce() per calcolare la somma totale dei prezzi di tutti i prodotti nell'array.

{
    const prodotti = [
        {
            nome: "Telefono",
            prezzo: 450
        },
        {
            nome: "Stereo",
            prezzo: 150
        },
        {
            nome: "Aspirapolvere",
            prezzo: 250
        },
        {
            nome: "Caricatore",
            prezzo: 20
        },
        {
            nome: "Videogioco",
            prezzo: 40
        }
    ]

    const sommaProd = prodotti.reduce((tot, prodotti) => (tot + prodotti.prezzo), 0);
    console.log(sommaProd);

}

//  Usa il metodo find() per trovare l'oggetto utente che ha l'ID 3.

{
    const utenti = [
        {
            nome: "Susanna",
            id: 1
        },
        {
            nome: "Marta",
            id: 2
        },
        {
            nome: "Sonia",
            id: 3
        },
        {
            nome: "Lucia",
            id: 4
        }
    ]

    const utentiFiltrati = utenti.filter(utente => utente.id === 3);
    console.log(utentiFiltrati);

}

//  Usa il metodo sort() per ordinare l'array di prodotti in base al prezzo, dal più economico al più costoso.

{
    const prodotti = [
        {
            nome: "Telefono",
            prezzo: 450
        },
        {
            nome: "Stereo",
            prezzo: 150
        },
        {
            nome: "Aspirapolvere",
            prezzo: 250
        },
        {
            nome: "Caricatore",
            prezzo: 20
        },
        {
            nome: "Videogioco",
            prezzo: 40
        }
    ]

    prodotti.sort((a, b) => a.prezzo - b.prezzo);
    console.log(prodotti);

}

// Usa il metodo forEach() per scorrere l'array di nomi e stampare ogni nome nella console.

{
    const nomi = ['Mario', 'Luigi', 'Sara', 'Alessia'];


    nomi.forEach(function (indice) {
        console.log(indice);
    });
}


// Usa join() per trasformare l'array in una stringa separata da spazi.

{
    const parole = ["Ciao", "mi chiamo", "Valerio"];
    const frase = parole.join(" ");
    console.log(frase);
}

// Usa includes() per controllare se 'arancia' è presente.

{
    const frutta = ["mela", "pesca", "arancia", "pera"];
    const fruttaInclusa = frutta.includes("arancia");
    console.log(fruttaInclusa);
}

// Usa some() per trovare uno studente con punteggio ≥ 90.

{
    const studenti = [
        {
            nome: "Susanna",
            punteggio: 100
        },
        {
            nome: "Marta",
            punteggio: 78
        },
        {
            nome: "Sonia",
            punteggio: 93
        },
        {
            nome: "Lucia",
            punteggio: 84
        }
    ]

    const studentiVotoAlto = studenti.some(studente => studente.punteggio >= 90);
    console.log(studentiVotoAlto);

}

// Filtra e mappa per ottenere i titoli dei libri pubblicati dopo il 2000.

{
    const libri = [
        { titolo: 'Il Signore degli Anelli', anno: 1954 },
        { titolo: 'Harry Potter e la Pietra Filosofale', anno: 1997 },
        { titolo: 'Il Codice Da Vinci', anno: 2003 },
        { titolo: 'Twilight', anno: 2005 },
        { titolo: '1984', anno: 1949 }
    ];

    const libriPubbDopo2000 = libri.filter(libro => libro.anno > 2000).map(libro => libro.titolo);
    console.log(libriPubbDopo2000);

}

// Crea un nuovo array in cui ogni numero dell’array numeri è moltiplicato per 2.

{
    const numeri = [20, 40, 60, 80, 100];

    const numeriMolt = numeri.map(numero => numero * 2);
    console.log(numeriMolt)

}

//  Crea un nuovo array che contiene solo i numeri maggiori di 20.

{
    const numeri = [4, 2, 56, 41, 22, 10, 18];

    const numeriMaggVenti = numeri.filter(numero => numero > 20);
    console.log(numeriMaggVenti);
}

// Usa find per ottenere il primo numero maggiore di 10

{
    const numeri = [3, 7, 10, 1, 6, 14, 5, 27, 15];

    const numMaggDieci = numeri.find(numero => numero > 10);
    console.log(numMaggDieci);
}

// Usa forEach per stampare ogni numero seguito da " è un numero"

{
    const numeri = [1, 2, 3];

    numeri.forEach(numero => console.log(`${numero} è un numero`));
}

// Usa reduce per calcolare la somma di tutti i numeri

{
    const numeri = [10, 20, 30];

    const sommNum = numeri.reduce((tot, valore) => tot + valore);
    console.log(sommNum);

}

// Usa includes per verificare se l’array contiene il numero 7

{
    const numeri = [2, 4, 7, 11, 14];

    const numIncluso = numeri.includes(7);
    console.log(numIncluso);
}

// Dato un array di numeri [2, 4, 6, 8], usa map() per creare un nuovo array  in cui ogni numero sia elevato al quadrato.

{
    const numeri = [2, 4, 6, 8];

    const numAlQuadrato = numeri.map(numero => numero * numero);
    console.log(numAlQuadrato);
}

// Dato un array di parole ["cane", "gatto", "uccello"], usa map()  per creare un nuovo array aggiungendo un "!" alla fine di ogni parola.

{
    const parole = ["cane", "gatto", "uccello"];

    const paroleEsclamate = parole.map(parola => parola + '!');
    console.log(paroleEsclamate);
}

// Dato un array di città ["Roma", "Milano", "Napoli"], usa map()  per creare un nuovo array contenente la lunghezza di ogni nome di città.

{
    const cities = ["Roma", "Milano", "Napoli"];

    const lenghtCityNames = cities.map(city => city.length);
    console.log(lenghtCityNames);
}


{
    const studenti = [
        { nome: "Luca", eta: 20, corso: "Informatica", voti: [28, 30, 26] },
        { nome: "Sara", eta: 22, corso: "Matematica", voti: [25, 27, 29] },
        { nome: "Marco", eta: 19, corso: "Fisica", voti: [30, 30, 28] },
        { nome: "Giulia", eta: 21, corso: "Informatica", voti: [24, 25, 26] }
    ];

    // find: Trova lo studente che ha 22 anni.

    const studenteVentidue = studenti.find(studente => studente.eta === 22);
    console.log(studenteVentidue);

    // find: Trova il primo studente che frequenta "Informatica".


    const studenteInformatica = studenti.find(studente => studente.corso === "Informatica");
    console.log(studenteInformatica);

    // filter: Crea un array con tutti gli studenti di età maggiore o uguale a 21.

    const studentiVentuno = studenti.filter(studente => studente.eta >= 21);
    console.log(studentiVentuno);

    // filter: Seleziona solo gli studenti che hanno almeno un 30 nei voti.

    const votoTrenta = studenti.filter(studente => studente.voti.some(voto => voto === 30));
    console.log(votoTrenta);

    // map: Crea un array con solo i nomi degli studenti.


    const nomiStudenti = studenti.map(studente => studente.nome);
    console.log(nomiStudenti);

    // forEach: Stampa in console il nome di ogni studente seguito dalla sua età.


    studenti.forEach(studente => console.log(studente.nome, studente.eta));

    // forEach: Calcola la somma totale di tutte le età usando forEach.

    let som = 0;

    studenti.forEach(studente => {

        som += studente.eta
    });

    console.log(som);

    // length: Stampa quanti studenti ci sono nell’array.


    console.log(`Numero studenti: ${studenti.length}`);

    // length: Stampa quanti voti ha ogni studente (usando studente.voti.length).

    studenti.forEach(studente => console.log(studente.voti.length));


    // length + filter: Conta quanti studenti frequentano "Informatica".


    const numeroUtentiInf = studenti.filter(studente => studente.corso === "Informatica");
    console.log(numeroUtentiInf.length);

    // Scrivi un ciclo for che stampi i nomi di tutti gli studenti.

    for (let i = 0; i < studenti.length; i++) {

        console.log(studenti[i].nome);
    }

    // Scrivi un ciclo for che calcoli la media delle età degli studenti (usando .length per dividere).

    let somma = 0;

    for (let i = 0; i < studenti.length; i++) {
        somma += studenti[i].eta
    }

    const etaMedia = somma / studenti.length

    console.log(etaMedia);

    // Crea una funzione cercaStudente(nome) che restituisca l’oggetto dello studente con quel nome.

    function cercaStudente(nome) {
        return studenti.find(studente => studente.nome === nome);
    }

    console.log(cercaStudente("Luca"));

    // Crea una funzione studentiInCorso(corso) che restituisca un array di studenti che frequentano quel corso.

    function studentiInCorso(corso) {
        return studenti.filter(studente => studente.corso === corso);
    }

    console.log(studentiInCorso("Fisica"));

    // Crea una funzione stampaStudenti() che stampi in console ogni studente in una riga tipo: Luca - 20 anni - Informatica

    function stampaStudenti() {
        studenti.forEach(studente => console.log(`${studente.nome}, ${studente.eta} anni, ${studente.corso}`));
    }

    stampaStudenti();

    // Crea una funzione contaStudenti() che restituisca il numero di studenti (usando .length).

    function contaStudenti() {
        return studenti.length
    }

    console.log(contaStudenti());

}

// Scrivi un programma che utilizzi un ciclo for per iterare da 1 a 20. Ad ogni iterazione, 
// il programma deve controllare se il numero è pari o dispari e stampare un messaggio appropriato, 
// come "Il numero 2 è pari" o "Il numero 3 è dispari".


{
    for (let i = 0; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(`il numero ${i} è pari`)
        }
        else {
            console.log(`il numero ${i} è dispari`)
        }
    }
}

// Scrivi una funzione JavaScript chiamata sommaArray che accetta un array di numeri come parametro.
//  La funzione deve usare un ciclo for standard per iterare su tutti gli elementi dell'array, 
// calcolare la loro somma totale e restituire il risultato.

{

    function sommaArray(arr) {
        let somma = 0

        for (let i = 0; i < arr.length; i++) {
            somma += arr[i]
        }

        return somma
    }

    const numeri = [5, 10, 15];
    const totale = sommaArray(numeri);
    console.log(`la somma totale di questi numeri ${numeri} è ${totale}`);
}


// Scrivi un programma che dichiari un array di numeri, ad esempio const voti = [8, 7, 9, 6, 10]. 
// Utilizzando un ciclo for, il programma deve calcolare la somma di tutti gli elementi dell'array e poi la media, stampando il risultato finale.

{

    const voti = [8, 7, 9, 6, 10];
    let somma = 0;

    for (let i = 0; i < voti.length; i++) {
        somma += voti[i]
    }

    const mediaVoti = somma / voti.length
    console.log(`La somma dei voti è: ${somma}`);
    console.log(`La media dei voti è: ${mediaVoti}`);
}


// Hai un array di oggetti, dove ogni oggetto rappresenta un prodotto con un nome e un prezzo (senza IVA).
// Usa il metodo map() per creare un nuovo array di oggetti. Ogni nuovo oggetto deve contenere il nome del prodotto e il suo prezzoTotale 
// calcolato aggiungendo l'IVA del 22%.

{
    const prodotti = [
        { nome: "Laptop", prezzo: 1200 },
        { nome: "Smartphone", prezzo: 800 },
        { nome: "Cuffie", prezzo: 150 }
    ];

    const prodottiConIva = prodotti.map(prodotto => {
        const prezzoTotale = prodotto.prezzo * 1.22;
        return {
            nome: prodotto.nome,
            prezzoTotale: prezzoTotale
        };
    });

    console.log(prodottiConIva);
}


{
    const products = [
        { id: "p001", name: "Laptop", category: "Elettronica", price: 1200, inStock: true },
        { id: "p002", name: "Mouse Wireless", category: "Accessori", price: 25, inStock: false },
        { id: "p003", name: "Smartphone", category: "Elettronica", price: 800, inStock: true },
        { id: "p004", name: "Tastiera Meccanica", category: "Accessori", price: 150, inStock: true },
        { id: "p005", name: "Cuffie Bluetooth", category: "Elettronica", price: 90, inStock: true },
        { id: "p006", name: "Webcam", category: "Elettronica", price: 65, inStock: false },
        { id: "p007", name: "Monitor 4K", category: "Elettronica", price: 450, inStock: true }
    ];

    // 1. Quanti prodotti ci sono nell'array?

    console.log(products.length);

    // 2. Accedi al primo prodotto dell'array.

    console.log(products[0]);

    // 3. Accedi all'ultimo prodotto dell'array.

    console.log(products[products.length - 1]);

    // 4. Accedi al secondo prodotto della lista.

    console.log(products[1]);

    // 5. Crea un array contenente solo i nomi dei prodotti.

    const nomeProdotti = products.map(prodotto => prodotto.name);
    console.log(nomeProdotti);

    // 6. Crea un array di stringhe descrittive, ad esempio: "Laptop - 1200€" per ogni prodotto.

    const descProdotti = products.map(prodotto => `${prodotto.name} - ${prodotto.price}`);
    console.log(descProdotti);

    // 7. Ottieni un array di tutti i prodotti che sono al momento disponibili in magazzino.

    const prodDisp = products.filter(prodotto => prodotto.inStock === true);
    console.log(prodDisp);

    // 8. Ottieni un array di tutti i prodotti della categoria "Elettronica"

    const categProd = products.filter(prodotto => prodotto.category === "Elettronica");
    console.log(categProd);

    // 9. Ottieni un array di prodotti con un prezzo inferiore a 100€.

    const prezzoInf = products.filter(prodotto => prodotto.price < 100);
    console.log(prezzoInf);

    // 10. Ottieni un array dei prodotti che non sono "Elettronica" e che sono disponibili in magazzino.

    const prodDispNoElettronica = products.filter(prodotto => prodotto.category !== "Elettronica" && prodotto.inStock === true)
    console.log(prodDispNoElettronica);

    // 11. Trova l'oggetto del prodotto con l'ID "p004".

    const trovaProd = products.find(prodotto => prodotto.id === "p004");
    console.log(trovaProd);

    // 12. Trova il primo prodotto che costa meno di 100€ ed è al momento disponibile.

    const prezzoInfProdDisp = products.find(prodotto => prodotto.price < 100 && prodotto.inStock === true);
    console.log(prezzoInfProdDisp);

}

{
    const cities = [
        { name: "Roma", country: "Italia", population: 2873000, area: 1285, rating: 4.8 },
        { name: "Tokyo", country: "Giappone", population: 13960000, area: 2194, rating: 4.9 },
        { name: "New York", country: "USA", population: 8419000, area: 783, rating: 4.7 },
        { name: "Parigi", country: "Francia", population: 2148000, area: 105, rating: 4.8 },
        { name: "Sydney", country: "Australia", population: 5230000, area: 12368, rating: 4.6 }
    ];
    // Stampare i nomi di tutte le città con un ciclo for

    for (let i = 0; i < cities.length; i++) {
        console.log(cities[i].name);
    }

    // Stampare nome e paese di tutte le città con un ciclo for

    for (let i = 0; i < cities.length; i++) {
        console.log(cities[i].name, cities[i].country);
    }

    // Calcolare la popolazione totale di tutte le città con un ciclo for

    let sum = 0

    for (let i = 0; i < cities.length; i++) {
        sum += cities[i].population
    }

    console.log(sum);

    // 4. Scrivere una funzione che prende una città e stampa: "La città [name] si trova in [country]"

    function nameCity(city) {
        console.log(`La città ${city.name} si trova in ${city.country}`);
    }

    nameCity(cities[1]);

    //  Scrivere una funzione che restituisce un array con i nomi di tutte le città

    function allCities(arr) {
        return arr.map(city => city.name)
    }

    console.log(allCities(cities));

    // Scrivere una funzione che filtra le città con rating maggiore o uguale a 4.8

    function maxRatingCity(arr) {
        return arr.filter(city => city.rating >= 4.8)
    }

    console.log(maxRatingCity(cities));
}


{

    const videogames = [
        { title: "The Legend of Zelda: Breath of the Wild", genre: "avventura", year: 2017, rating: 97, platform: "Nintendo Switch", price: 60 },
        { title: "God of War", genre: "azione", year: 2018, rating: 94, platform: "PlayStation", price: 50 },
        { title: "Red Dead Redemption 2", genre: "open-world", year: 2018, rating: 96, platform: "PlayStation", price: 70 },
        { title: "Minecraft", genre: "sandbox", year: 2011, rating: 93, platform: "Multi", price: 30 },
        { title: "Elden Ring", genre: "soulslike", year: 2022, rating: 96, platform: "Multi", price: 70 },
        { title: "Hollow Knight", genre: "metroidvania", year: 2017, rating: 90, platform: "PC", price: 15 },
        { title: "Fortnite", genre: "battle royale", year: 2017, rating: 85, platform: "Multi", price: 0 },
        { title: "Super Mario Odyssey", genre: "platform", year: 2017, rating: 97, platform: "Nintendo Switch", price: 60 },
        { title: "The Witcher 3: Wild Hunt", genre: "rpg", year: 2015, rating: 93, platform: "Multi", price: 40 },
        { title: "Cyberpunk 2077", genre: "rpg", year: 2020, rating: 75, platform: "Multi", price: 60 }
    ];

    // LENGTH & ACCESSO

    // 1. Stampare quanti videogiochi ci sono nell’array

    console.log(videogames.length);

    // 2. Stampare il titolo del primo videogioco

    console.log(videogames[0].title);

    // 3. Stampare il titolo e la piattaforma dell’ultimo videogioco

    console.log(videogames[videogames.length - 1].title, videogames[videogames.length - 1].platform);

    // 3b. Stampare il titolo e la piattaforma del penultimo videogioco

    console.log(videogames[videogames.length - 2].title, videogames[videogames.length - 2].platform);


    // CICLO FOR

    // 4. Stampare tutti i titoli dei videogiochi

    for (let i = 0; i < videogames.length; i++) {
        console.log(videogames[i].title);
    }

    // 5. Calcolare la somma di tutti i prezzi

    let sum = 0;

    for (let i = 0; i < videogames.length; i++) {
        sum += videogames[i].price

    }

    console.log(sum);

    const media = sum / videogames.length;

    console.log(media);

    // 6. Stampare i videogiochi con rating maggiore di 95

    for (let i = 0; i < videogames.length; i++) {
        if (videogames[i].rating > 95) {
            console.log(videogames[i])
        }
    }

    // METODI DEGLI ARRAY

    // 7. Creare un array con solo i titoli dei videogiochi

    const gamesTitle = videogames.map(v => v.title);
    console.log(gamesTitle);

    // 8. Creare un array di frasi tipo: "[title] è un gioco di [genre]"

    const frasi = videogames.map(v => `${v.title} è un gioco di ${v.genre}`);
    console.log(frasi);

    // 9. Ottenere tutti i giochi per piattaforma "Nintendo Switch"

    const nintendo = videogames.filter(v => v.platform === "Nintendo Switch");
    console.log(nintendo);

    // 10. Ottenere tutti i giochi con prezzo <= 50

    const prezzoInf = videogames.filter(v => v.price <= 50);
    console.log(prezzoInf);

    // 11. Ottenere solo i giochi del genere "rpg"

    const genere = videogames.filter(v => v.genre === "rpg");
    console.log(genere);

    // 12. Trovare il primo gioco con rating >= 95

    const rating = videogames.find(v => v.rating >= 95);
    console.log(rating);

    // 13. Trovare il gioco chiamato "Minecraft"

    const nome = videogames.find(v => v.title === "Minecraft");
    console.log(nome);

    // 14. Stampare per ogni videogioco: "[title] costa [price] €"

    videogames.forEach(v => console.log(`${v.title} costa ${v.price}`));

    // 15. Stampare solo i titoli in maiuscolo

    videogames.forEach(v => console.log(v.title.toLocaleUpperCase()));



    // FUNZIONI / MISTI

    // 16. Scrivere una funzione che restituisce il prezzo medio dei videogiochi

    function prezzoMedio(arr) {

        const somma = arr.reduce((tot, acc) => tot + acc.price, 0);
        const media = somma / arr.length

        return media
    }

    console.log(prezzoMedio(videogames));

    // 17. Scrivere una funzione che restituisce un array con i titoli dei giochi usciti dopo il 2015

    function titoliGiochi(arr) {
        return giochiUsciti2015 = arr.filter(v => v.year > 2015)
    }

    console.log(titoliGiochi(videogames));

    // 18. Scrivere una funzione che restituisce il titolo del gioco più costoso

    function giocoCostoso(arr) {

        let giocoPiuCostoso = arr[0];

        for (let i = 0; i < arr.length; i++) {

            if (arr[i].price > giocoPiuCostoso.price) return giocoPiuCostoso;

        }
    }

    console.log(giocoCostoso(videogames));

    // 19. Stampare con forEach solo i giochi con rating >= 95

    const giochiFiltrati = videogames.filter(v => v.rating >= 95);
    giochiFiltrati.forEach(v => console.log(v));

    // 20. Creare un array di stringhe tipo: "[title] ([genre]) – [year]"

    const arrStringe = videogames.map(v => `${v.title} (${v.genre}) - ${v.year}`);
    console.log(arrStringe);

}


{
    const books = [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Fiction", rating: 88, price: 10 },
        { title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian", rating: 92, price: 15 },
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Fiction", rating: 95, price: 12 },
        { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, genre: "Romance", rating: 90, price: 8 },
        { title: "Moby Dick", author: "Herman Melville", year: 1851, genre: "Adventure", rating: 85, price: 20 },
        { title: "War and Peace", author: "Leo Tolstoy", year: 1869, genre: "Historical", rating: 93, price: 25 },
        { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, genre: "Fiction", rating: 85, price: 18 },
        { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, genre: "Fantasy", rating: 96, price: 14 },
        { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954, genre: "Fantasy", rating: 98, price: 35 },
        { title: "The Book Thief", author: "Markus Zusak", year: 2005, genre: "Historical", rating: 90, price: 16 }
    ];


    // Usa un ciclo for per stampare tutti i titoli dei libri.

    for (let i = 0; i < books.length; i++) {
        console.log(books[i].title);
    }

    // Usa un ciclo for per sommare il prezzo di tutti i libri.

    let sum = 0;
    for (let i = 0; i < books.length; i++) {
        sum += books[i].price

    }

    console.log(sum);

    // Usa un ciclo for per trovare e stampare i libri pubblicati prima del 1900.

    for (let i = 0; i < books.length; i++) {
        if (books[i].year < 1900) {
            console.log(books[i]);
        }
    }

    // Stampare l’autore di ogni libro

    books.forEach(book => console.log(book.author));

    // Creare un array con solo i titoli dei libri

    const author = books.map(book => book.author);
    console.log(author);

    // Filtrare i libri con rating >= 90

    const ratingBooks = books.filter(book => book.rating >= 90);
    console.log(ratingBooks);

    // 7. Trova il primo libro con rating 95

    const findBooks = books.find(book => book.rating === 95);
    console.log(findBooks);

    // 8. Creare una frase del tipo "[title] è un libro di [author]"

    const phrase = books.map(book => `${book.title} è un libro di ${book.author}`);
    console.log(phrase);

    // 9. Ottenere solo i libri del genere "Fantasy"

    const fantasyBooks = books.filter(book => book.genre === "Fantasy");
    console.log(fantasyBooks);

    // 10. Trovare un libro specifico (ad esempio "Moby Dick")

    const specificBook = books.find(book => book.title === "Moby Dick");
    console.log(specificBook);

    // 11. Stampare il titolo e il prezzo di ogni libro

    books.forEach(book => console.log(`Titolo: ${book.title} Prezzo: ${book.price} €`));

    // 12. Creare un array con solo gli anni di pubblicazione dei libri

    const yearsBook = books.map(book => book.year);
    console.log(yearsBook);

    // 13. Accesso al primo elemento – Stampare il titolo del primo libro
    console.log(books[0].title);

    // 14. Accesso all'ultimo elemento – Stampare il titolo dell'ultimo libro

    console.log(books[books.length - 1].title);

    // 15. Stampare la lunghezza dell'array – Stampare quanti libri ci sono nell'array

    console.log(books.length)

    // 16. Accesso al penultimo elemento – Stampare il titolo e l'autore del penultimo libro

    console.log(books[books.length - 2].title, books[books.length - 2].author)

    // 17. Verifica se l'array è vuoto –  Verifica se l'array è vuoto e stampare un messaggio appropriato.

    if (books.length === 0) {
        console.log("L'array è vuoto.");
    } else {
        console.log("L'array non è vuoto.");
    }
}


{
    const viaggi = [
        { id: 1, destinazione: "Parigi", durata: 5, prezzo: 750, compagnia: "Air France" },
        { id: 2, destinazione: "Roma", durata: 3, prezzo: 500, compagnia: "Alitalia" },
        { id: 3, destinazione: "Tokyo", durata: 10, prezzo: 1500, compagnia: "Japan Airlines" },
        { id: 4, destinazione: "New York", durata: 7, prezzo: 1200, compagnia: "Delta" },
        { id: 5, destinazione: "Sydney", durata: 12, prezzo: 1800, compagnia: "Qantas" },
        { id: 6, destinazione: "Londra", durata: 4, prezzo: 700, compagnia: "British Airways" },
    ];


    // Usa un ciclo for per stampare tutte le destinazioni dei viaggi.

    for (let i = 0; i < viaggi.length; i++) {
        console.log(viaggi[i].destinazione);
    }

    // Stampare il prezzo di ogni viaggio.

    viaggi.forEach(v => console.log(v.prezzo));

    // Creare un array di tutte le destinazioni dei viaggi.

    const destViaggi = viaggi.map(v => v.destinazione)
    console.log(destViaggi);

    // Ottenere tutti i viaggi che costano meno di 1000 euro.

    const viaggiEcon = viaggi.filter(v => v.prezzo < 1000);
    console.log(viaggiEcon);

    // Trovare il primo viaggio con durata maggiore di 10 giorni.

    const durViaggio = viaggi.find(v => v.durata > 10);
    console.log(durViaggio);

    // Calcola la somma totale dei prezzi di tutti i viaggi usando un ciclo for.

    let som = 0;
    for (let i = 0; i < viaggi.length; i++) {

        som += viaggi[i].prezzo

    }

    console.log(som);

    // Creare un array solo delle compagnie aeree dei viaggi.

    const compAeree = viaggi.map(v => v.compagnia);
    console.log(compAeree);

    // Stampare una frase per ogni viaggio:"Parigi dura 5 giorni e costa 750 euro."

    viaggi.forEach(v => console.log(`${v.destinazione} dura ${v.durata} e costa ${v.prezzo} euro`))

    // Scrivi una funzione che prende il nome di una destinazione e usa find per restituire l’oggetto viaggio corrispondente.

    function trovaCitta(city) {
        return viaggi.find(v => v.destinazione === city)
    }

    console.log(trovaCitta("Roma"))

    // Creare un array con i viaggi che durano più di 5 giorni e poi ottenere solo le destinazioni.

    const viaggiLunghi = viaggi.filter(v => v.durata > 5);
    console.log(viaggiLunghi);

    const soloDest = viaggiLunghi.map(v => v.destinazione);
    console.log(soloDest);

    // Conta quanti viaggi durano meno di 6 giorni usando filter e la proprietà length.

    const viaggiCorti = viaggi.filter(v => v.durata < 6)
    console.log(viaggiCorti.length);

    // Scrivi una funzione che restituisce un nuovo array contenente solo le destinazioni dei viaggi il cui prezzo è maggiore di 1000 euro.

    function destEconomiche(arr) {
        return arr.filter(v => v.prezzo > 1000);

    }

    console.log(destEconomiche(viaggi));

    // Accedi al primo viaggio nell'array e stampa la sua destinazione

    console.log(viaggi[0].destinazione);

    //  Accedi all'ultimo viaggio nell'array e stampa la sua destinazione

    console.log(viaggi[viaggi.length - 1].destinazione);

    // Accedi al penultimo viaggio nell'array e stampa la sua destinazione

    console.log(viaggi[viaggi.length - 2].destinazione);

    // Accedi al terzo viaggio nell'array e stampa la sua durata

    console.log(viaggi[2].durata);

    // Calcola il totale della durata di tutti i viaggi

    const durataTot = viaggi.reduce((tot, acc) => tot + acc.durata, 0);
    console.log(durataTot);

    // Calcolare il prezzo medio dei viaggi

    let sum = 0;
    for (let i = 0; i < viaggi.length; i++) {

        sum += viaggi[i].prezzo
    }

    console.log(sum)

    const mediaPrezzo = sum / viaggi.length;
    console.log(mediaPrezzo);


    // Calcolare la somma totale dei prezzi dei viaggi

    const totPrezzi = viaggi.reduce((tot, acc) => tot + acc.prezzo, 0);
    console.log(totPrezzi);

    //  Contare quanti viaggi hanno durata maggiore di 7 giorni

    const durataMaggSette = viaggi.filter(v => v.durata > 7);
    console.log(durataMaggSette.length);

}
