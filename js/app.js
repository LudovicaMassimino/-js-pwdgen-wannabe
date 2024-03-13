

console.log ('Ciao a tutti!');

// chiedere il nome
const nome = prompt('Qual è il tuo nome?'); // string
console.log(nome)

// chiedere il cognome 
const cognome = prompt('Qual è il tuo cognome?'); // string
console.log(cognome)

// chiedere il colore preferito
const colorePreferito = prompt('Qual è il tuo colore preferito?'); // string
console.log(colorePreferito)

// numero psw scelto da me
const numero = 39 ; // number
console.log(numero)

// generare password
// const password = nome + cognome + colorePreferito + numero ; // string
// console.log('La tua nuova password è: ' + nome + cognome + colorePreferito + numero) // oppure console.log(password)

// bonus: generare un numero random
const numeroRandom = Math.floor (Math.random (1) * 100) + 1; // number
console.log(numeroRandom)

// generare password con numero random all'interno
const password = nome + cognome + colorePreferito + numeroRandom ; // string
console.log('La tua nuova password è: ' + nome + cognome + colorePreferito + numeroRandom)