console.log();
let nome = "vinicius"

console.log(nome);

console.log(nome.replace("vinicius", "luiz"));
console.log(nome);


console.log("Dev: " + nome);
console.log(`Dev: ${nome}`);

let peso = 61
let altura = 1.65
let imc = peso / (altura * altura)
console.log(`IMC : ${imc.toFixed(2)}`);

console.log(Number.isInteger(peso));
console.log(Number.isInteger(altura));
console.log(10 / 0);
console.log("3" + 2);
console.log("3" - 2);
console.log("3x" - 2);
console.log(0.5 + 0.5);
console.log(0.1 + 0.2);
console.log(0.1 + 0.7);

console.log("----------------------- boolean");
let sw = true
console.log(`Chave : ${true}`);
let lamp = !0
console.log(`Lampada: ${lamp}`);
console.log(sw && "Lampada acesa");







if (imc > 23) {
    console.log("gordo");

} else if (imc <= 23) {
    console.log("magro");

} else {
    return;
}