
//Iteration1
let hacker1 = "Ruperto";
let hacker2 = "Antonia";

if (hacker1 === "Ruperto") {
    console.log("The driver's name is Ruperto")
}
else {
    console.log("The navigator's name Antonia")
}

//Iteration2
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker.length} characters`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

//Iteration3  
let cadena = ''
//creo una variable vacia externa para ir almacenando cada vuelta del loop.
for (let i = 0; i < hacker1.length; i++) {

    cadena = cadena + hacker1[i] + " "
    //en cada vuelta del loop, en la variable vacia me guarda cada letra de cada vuelta y le suma un espacio    
}
console.log(cadena.toUpperCase());
//ubico el console.log afuera del for para que no imprima en la consola cada  vuelta del loop. 
//Esto puedo hacerlo ya que la variable esta declarada por fuera del for

let wordReverse = ''
for (let i = (hacker1.length - 1); i >= 0; i--) {

    wordReverse = wordReverse + hacker1[i];
}
console.log(wordReverse);