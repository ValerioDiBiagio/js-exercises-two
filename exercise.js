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

