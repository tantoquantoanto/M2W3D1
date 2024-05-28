/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/
let newString;
function upperFirst(stringa) {
    newString = stringa.split(" ");
    for(let i = 0; i < newString.length; i++) {
    newString[i] = newString[i].charAt(0).toUpperCase() + newString[i].replaceAll(newString[i].charAt(0), "") 
        
    }

   return newString
}
console.log(upperFirst("Ciao mi chiamo Antonietta"))



/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/
let numbersArray = [];
let number = []
function giveMeRandom(n) {
for(let i = 0; i < 11; i++) {
    numbersArray.push(i.toString() * n)
    
} return numbersArray




} console.log(giveMeRandom(10))

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
   let areaCalcolata = (l1 * l2) / 2;
 return areaCalcolata;
} 
console.log(area(6,8))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(number) {
    let value = number - 19;
    if(value > 19) {
        return value * 3;
    } else return value
}
console.log(crazyDiff(50))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/
let codeString = "";
function codify(string) {
    
    if(string.startsWith("code")) {
        codeString = string

    } else {
        codeString = "code" + string;
    } return codeString

} console.log(codify("codebase"))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(num1) {
    if(num1 % 3 === 0 || num1 % 7 === 0) {
        return true
    } else {
        return false
    }
} console.log(check3and7(14))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/


function cutString(string2) {

string2 = string2.slice(1, -1)


return string2
} console.log(cutString("antonietta"))
