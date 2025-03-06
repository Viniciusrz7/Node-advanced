let alunosEM1 = ["Vitor", "Junior", "tania", "Vinicius", "maria", "Lucas"]
console.log(alunosEM1.length);
console.log(alunosEM1);
console.table(alunosEM1)
console.log(alunosEM1[2]);
alunosEM1.push("Pereira")
console.log((alunosEM1));
alunosEM1.unshift("Luiza");
console.table(alunosEM1);
alunosEM1.splice(4, 0, "Matheus", "julia")
console.table(alunosEM1);
alunosEM1[12] = "Leandro"
console.table(alunosEM1);
alunosEM1[1] = "Victor"
console.table(alunosEM1);
alunosEM1.pop();
console.table(alunosEM1);
alunosEM1.shift()
console.table(alunosEM1);
alunosEM1.splice(6, 1)
console.table(alunosEM1);
delete alunosEM1[3]
console.table(alunosEM1);

console.clear();
let notas = [3, 8, 5, 9, 2]
console.log(notas);
console.table(notas);

for (let i = 0; i < notas.length; i++) {
    console.log(notas[i]);
}
console.log("--------------------------------------------------");

notas.forEach(notas => {
    console.log(notas);

});
//.Adicionando 1 ponto a notas dos alunos
let notasAtualizadas = notas.map((na) => {
    return na + 1
})
console.log(notas);
console.log(notasAtualizadas);
//Exemplo 2: COnversão do sistema de pontos para letras

let notasConvertidas = notas.map((nc) => {
    if (nc < 5) {
        return "NA"
    } else if (nc > 7) {
        return "A"
    } else {
        return "PA"
    }
})
console.log(notas);
console.log(notasConvertidas);

let alunosEM2 = new Array("Tony", "Peter", "dilma", "Natasha")
console.log(alunosEM2);
console.table(alunosEM2);
alunosEM2.push("Steve");
console.log(alunosEM2);
console.table(alunosEM2);

let alunosEM3 = [
    {
        nome: "Bruce",
        idade: 43,
        bolsista: false
    },
    {
        nome: "clarck",
        idade: 45,
        bolsista: false
    },
    {
        nome: "Diana",
        idade: 25,
        bolsista: false
    },
    {
        nome: "bery",
        idade: 22,
        bolsista: true
    }
]
console.log(alunosEM3);
console.table(alunosEM3)


console.log(alunosEM3.filter((b) => {
    return b.bolsista === true
}));

console.log(alunosEM3.filter((i) => {
    return i.idade > 40
}));

alunosEM3.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})
console.table(alunosEM3);

alunosEM3.sort((x, y) => {
    return (x.idade - y.idade)
})
console.table(alunosEM3);

let alunosOrdernados = [...alunosEM3]
alunosEM3.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})
console.clear()
console.table(alunosOrdernados);

// reduzindo um array

let somaIdades = alunosEM3.reduce((ac, aluno) => {
    return ac + aluno.idade
}, 0)
console.log(somaIdades);
console.log(`Média: ${somaIdades / alunosEM3.length}`);


