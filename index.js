
// Iteration 1: Names and Input
let hacker1 = "John"
let hacker2 = "John"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length ){
    console.log(`The driver has the longest name, it has ${hacker1.length}`)
} else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, It has ${hacker2.length}.`)
}else {
    console.log(`Wow, you both have equally long names, ${hacker1.length}`)
} 


// Iteration 3: Loops
let teste1 = ""
for(let i = 0; i < hacker1.length; i++){
    teste1 += hacker1[i].toUpperCase() + " "
}
console.log(teste1)

let teste2 = ""
for(let i = hacker2.length -1; i >= 0; i--){
    teste2 += hacker2[i]
}
console.log(teste2);


if(hacker1 > hacker2){
    console.log("The driver's name goes first.")
} else if(hacker2 > hacker1){
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name")
}