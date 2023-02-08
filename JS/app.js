// // CHIEDERE ALL'UTENTE DI INSERIRE UNA PAROLA
// let wordInsert = prompt('Inserisci una parola!')
// console.log(wordInsert)

// let word = wordInsert.toLocaleLowerCase()
// console.log(word)


// // .CREARE UNA NUOVA VARIABILE CON LA PAROLA AL CONTRARIO    
// let reverseWord = revertedWord(word)



// // .CONFRONTARE LE 2 STRINGHE

// if (word === reverseWord) {
//     console.log('La parola', word, 'è palindroma')
// }
// else {
//     console.log('La parola', word, 'non è palindroma')
// }



// // .FUNZIONI

// function revertedWord(parolaReverse) {
//     let reverseWord = ''

//     // .IMPOSTARE UN CICLO CHE PRENDE L'ULTIMA LETTERA E LA PORTA ALL'INIZIO E COSI VIA

//     for (let i = parolaReverse.length - 1; i >= 0; i--) {
//         reverseWord += parolaReverse[i]
//     }

//     // console.log(reverseWord)
//     return reverseWord
// }


// // // // // // // // // // // // // // // // // // // // // // // PARI E DISPARI


// chiedere all'utente di scegliere pari o dispari e di inserire un numero
let scelta = prompt('Seleziona pari o dispari!')
let numeroUtente = parseInt (prompt('Inserisci un numero da 1 a 5!'))
console.log ('UTENTE:', numeroUtente)



// // // // // // // // // // if (scelta === 'pari'){
// // // // // // // // // //     numeroUtente = prompt('Inserisci un numero da 1 a 5')
// // // // // // // // // // }
// // // // // // // // // // else{
// // // // // // // // // //     numeroUtente = prompt('Inserisci un numero da 1 a 5')
// // // // // // // // // // }



// generare un numero random per il pc usando una funzione
let numeroPc = Math.floor(Math.random() * 5)
console.log('PC:',numeroPc)


// sommiamo i 2 numeri
let sum = (numeroUtente + numeroPc)
console.log('SOMMA:',sum)


// stabiliamo se il risultato è pari o dispari con una funzione
let resto = sum % 2
console.log('RESTO:', resto)

if(scelta = 'pari' && resto === 0){
    alert('YOU WINS!')
}
else if(scelta = 'dispari' && resto === 1){
    alert('YOU WINS!')
}
else{
    alert('PC WINS!')
}



// // // // // // // // // // // else if (scelta = 'dispari' && resto === 0){
// // // // // // // // // // //     alert('PC WINS!')
// // // // // // // // // // // }
// // // // // // // // // // // else if(scelta = 'pari' && resto === 1){
// // // // // // // // // // //     alert('PC WINS!')
// // // // // // // // // // // }