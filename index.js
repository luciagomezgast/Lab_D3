
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

//Bonus1
let longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque sem ac diam congue viverra. Fusce vel nunc dolor. Suspendisse congue, sem vel commodo elementum, velit elit ullamcorper orci, sit amet faucibus magna arcu a sapien. Vivamus vestibulum odio ac odio tristique, nec condimentum mauris sagittis. Donec iaculis mauris nec velit finibus luctus. Nam felis mauris, egestas et dictum fermentum, placerat a libero. Donec diam erat, vehicula vitae pharetra id, vehicula congue quam. Vivamus tincidunt leo sem, vel volutpat tortor tempor eu. Duis et molestie sapien. Nam pellentesque eget justo vel gravida. Morbi in erat ante. Praesent quis vulputate odio. Sed egestas ullamcorper rhoncus. Aenean semper a ante at rutrum.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis consequat placerat dignissim. Donec condimentum, ligula at feugiat dictum, diam metus suscipit tellus, et mollis dui erat in lacus. Sed et mi non neque convallis egestas. Aenean eu auctor turpis, vitae auctor neque. Suspendisse nec ex rhoncus, luctus leo vestibulum, faucibus nulla. Pellentesque vitae odio risus. Curabitur odio felis, malesuada pretium varius a, rutrum vel odio.Donec fringilla nibh sed tellus eleifend porta. Nulla posuere dui nulla, rhoncus condimentum orci porta eu. Aenean ullamcorper nunc ut ex iaculis interdum. Ut bibendum risus tortor, sed interdum turpis tincidunt ac. Mauris pharetra, tortor eget luctus ornare, leo dolor facilisis diam, elementum fringilla nunc justo id nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In congue quis erat sed fringilla'

let array = longText.split(' ')
console.log(array.length);

let etCounter = 0
for (let i = 0; i < longText.length; i++) {
    const char = longText[i];
    const char2 = longText[i + 1];

    if (char === "e" && char2 === "t") {

        etCounter++
    }
}
console.log(etCounter);