function verificapalindroma(parola){
    let palindroma = parola.split(``).reverse(``).join(``);

    if(palindroma === parola){
        return true;
    }

    return false
}

let input = prompt("inserisci una parola per vedere se è polindroma");

let controllo = verificapalindroma(input)

if(controllo){
    console.log("La parola è palindroma")
}
else{
    console.log("La parola non è palindroma")
}

