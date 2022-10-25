const arrEmilan = ['andryshevchenko@gmail.com', 'pippomio@libero.it', 'tempestaperfetta@nesta.com', 'smokingbianco@kaka.br']

let email = prompt("Please enter your email");
console.log(email)

let emails = false

for (let i = 0; i < arrEmilan.length; i++) {

    if (email == arrEmilan[i]) {
        emails == true
        console.log('corretto')
    } else {
        console.log('errore')
    }

    //

} 




// I DADI 


let user = Math.round(Math.random() * 6)
let ia = Math.round(Math.random() * 6)
console.log(user, ia)

if (user === ia){
    console.log('PAREGGIO')
}   else if (user > ia) {
    console.log('HAI VINTO')
}   else 
    console.log('HAI PERSO')