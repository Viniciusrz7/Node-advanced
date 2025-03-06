class User {
    constructor(login, senha) {
        this.login = login
        // encapsular a senha
        let _senha = senha // privado
        this.getSenha = () => _senha
        this.setSenha = (novaSenha) => _senha = novaSenha
    }

    logar() {
        console.log("_______________________");
        console.log(`Usuario: ${this.login}`);
        console.log(`Senha: ${this.getSenha()}`);
        if (this.login === "admin" && this.getSenha() === "123456") {
            console.log("Usuario autenticado");
        } else {
            console.log("Usuario e/ou senha inválido(s)");
        }
    }
}

console.clear()

const user1 = new User("admin","1234")
user1.logar()
user1.setSenha("123456")
user1.logar()