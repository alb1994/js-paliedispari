
let pd = prompt("digita pari o dispari")

if(pd === "pari"){

    function somma_p_d (a,b){
        let somma = a + b;
        console.log(somma);
            if ( somma % 2 === 0){  
                console.log("vinto")}
        
            else{
                console.log("perso")}
        
    }

    let numero = parseInt(prompt("inserisci unnumeroda 1 a 5"))
    console.log(numero +"+")

    let numero_pc = Math.floor(Math.random() * 5) + 1;
    console.log(numero_pc +"=")

     somma_p_d(numero,numero_pc)

}

else if (pd === "dispari"){
    function somma_p_d (a,b){
        let somma = a + b;
        console.log(somma);
            if ( somma % 2 !== 0){  
                console.log("vinto")}
        
            else{
                console.log("perso")}
        
    }

    let numero = parseInt(prompt("inserisci unnumeroda 1 a 5"))
    console.log(numero +"+")

    let numero_pc = Math.floor(Math.random() * 5) + 1;
    console.log(numero_pc +"=")

     somma_p_d(numero,numero_pc)
}
else{
    console.log("errore")
}
