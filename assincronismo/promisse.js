const read = require('readline-sync');


const database = {
    admin: {
        usuario: "Admin",
        senha: "0000"
    },
    prof: {
        usuario: "Jose de assis",
        senha: "123456"
    }
}
console.log("-------------------");
console.log("USUARIO");
console.log("-------------------");
let login = read.question("login: ").toLowerCase();
let senha = read.question("senha: ").toLowerCase();
console.log("---------------------------");
logar(login, senha)
    .then((message) => {
        console.log(message);

    })
    .catch((error) => {
        console.log("Erro de autenticação" + error);

    })
function logar(login, senha) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (database.hasOwnProperty(login)) {
                if (database[login].senha === senha) {
                    resolve("Autenticação bem sucedida. Olá " + database[login].usuario)
                } else {
                    reject("Senha incorreta.Por favor tente novamente")
                }
            } else {
                reject("Usuário não encontrado, por favor, verifique o login")
            }
        }, 2000);
    })

}
