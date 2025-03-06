const read = require('readline-sync')
console.clear()
console.log("Via cep");
let cep = read.question("Digite o cep: ")
let urlAPI = 'https://viacep.com.br/ws/' + cep + '/json/'
console.log(urlAPI);

fetch(urlAPI)
    .then((response) => {
        return response.json()
    })
    .then((dados) => {
        console.log(dados.logradouro);
        console.log(dados.bairro);
        console.log(dados.localidade);
        console.log(dados.uf);

    })
    .catch((error) => {
        console.log("Error ao obter o endereço");

    })