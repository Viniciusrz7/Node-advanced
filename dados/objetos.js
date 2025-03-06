
const funcionario1 = {}
funcionario1.nome = "Jose"
funcionario1.cargo = "Professor"
funcionario1.email = "josesilva@gmail.com"
funcionario1.salario = 10000
funcionario1.insta = "@prof.joseassis"

console.log(funcionario1);
console.log(funcionario1.cargo);

funcionario1.nome = "Jose de assis"
console.log(funcionario1);
delete funcionario1.insta
console.log(funcionario1);


const funcionario2 = {
    nome: "Lula da silva",
    cargo: "Presidente",
    email: "batman@gmail.com",
    Salario: 40000
}
console.log(funcionario2);

const endereco1 = {
    logradouro: "Bat caverna",
    cidade: "Gothan city",
    estado: "Nova jersey"
}
console.log(endereco1);


const funcionario3 = {
    nome: "Alfredey ",
    cargo: "mordomo",
    email: "alfred@gmail.com",
    Salario: 20000,
    ...endereco1
}
console.log(funcionario3);
const funcionario4 = {
    nome: "Gleysson ",
    cargo: "Supervisor",
    email: "alfred@gmail.com",
    Salario: 4000,
    ...endereco1 //SPREAD OPERATOR
}
console.log(funcionario4);


const funcionario5 = {
    nome: "Thony Stark",
    cargo: "Engenheiro",
    email: "ironman@gmail.com",
    salario: 375000,
    armadura: {
        versao: "Mark2",
        ano: 2010,
        reator: "Arc 01"
    },
    suitUp: () => {
        console.log("�]�9�");
        
    }
}
console.log(funcionario5);
console.log(funcionario5.armadura.versao);
funcionario5.suitUp()


