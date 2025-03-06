const colors = require('colors')
const read = require('readline-sync')

let nome = read.question("Digite o seu nome: ")
console.log(`Hello ${nome}`);
let peso = Number(read.question("Digite o seu peso (Kg): ").replace(",", "."))
let altura = Number(read.question("Digite a sua altura (M): ").replace(",", "."))
let imc = peso / (altura * altura)
console.log("");
console.log("_______________________");
console.log("Ficha do aluno".italic.bold);
console.log(`Nome: ${nome.toLowerCase()}`);
console.log(`Peso: ${peso}`);
console.log(`Altura: ${altura}`);
console.log(`Imc: ${imc.toFixed(2)}`);


if (imc < 18.5) {
    console.log("Abaixo do peso".cyan);
} else if (imc < 25) {
    console.log("Peso normal ".green);
}else if(imc < 30){
    console.log("Acima do peso ".yellow);
}else if(imc < 35){
    console.log("Obesidade I ".yellow);
}else if (imc <40){
    console.log("Obesidade II ".red);
}else{
    console.log("PObesidade III".red.bold);
}
console.log("");
console.log("-----------------------------");

