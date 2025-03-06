const fs = require('fs')


async function criarArquivo() {
    let conteudo = "Professor Jose de Assis\n Exemplo de uso dos recursos async e await"
    await gravarArquivo("C:\\Users\\VINIR\\OneDrive\\Área de Trabalho\\teste.txt", conteudo)
}

async function gravarArquivo(path, conteudo) {
    try {
        await fs.promises.writeFile(path, conteudo)
        console.log("Arquivo gravado com sucesso");
        
    } catch (error) {
        console.log(error);

    }
}
console.clear()
criarArquivo()