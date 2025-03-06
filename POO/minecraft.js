class Bloco {

    constructor(textura, resistencia) {
        this.textura = textura;
        this.resistencia = resistencia;
    }

    criarBloco() {
        console.log("--------------");
        console.log("|-|");
        console.log("|-|");
        console.log(`Bloco de ${this.textura}`);
        console.log(`Resistencia: ${this.resistencia}`);

    }

    construir() {
        console.log(`Bloco de ${this.textura} colocado`);
    }

    minerar() {
        console.log("��� Recursos obtidos!");
    }
}


class Enxada extends Bloco {

    constructor(textura, resistencia, conquista) {
        super(textura, resistencia)
        this.conquista = conquista
    }

    criarEnxada() {
        console.log("-------------------------");
        console.log("-_");
        console.log(" /");
        console.log(`Enxada de ${this.textura}`);
        console.log(`Resistencia ${this.resistencia}`);
    }

    arar() {
        console.log("._._._. Terra arada!");
        if (this.conquista === true) {
            console.log(" ) conquista obtida!");
        }
    }
  // polimorfismo
    minerar() {
        console.log("-_- Dano atribuido");
        
    }
}

// Mundo do Minecraft
console.clear()
console.log("MINECRAFT");
console.log("            MINECRAFT");
console.log("                      MINECRAFT");
console.log("                                 MINECRAFT");
console.log();

const bloco1 = new Bloco("terra", 1)
bloco1.criarBloco()

const bloco2 = new Bloco("madeira", 2)
bloco2.criarBloco()
bloco2.construir()

const bloco3 = new Bloco("pedra", 5)
bloco3.criarBloco()
bloco3.minerar()

const enxada1 = new Enxada("madeira", 2, false)
enxada1.criarEnxada()
enxada1.arar()


const enxada2 = new Enxada("ferro", 5, true)
enxada2.criarEnxada()
enxada2.arar()

const enxada3 = new Enxada("diamante", 10, false)
enxada3.criarEnxada()
enxada3.minerar()