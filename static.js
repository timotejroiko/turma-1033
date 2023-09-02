class Carro {
    static carrosCriados = 0;
    constructor(cor) {
        this.cor = cor;
        Carro.carrosCriados++;
    }
    corDoCarro() {
        return this.cor;
    }
    static criarCarro(cor) {
        return new Carro(cor);
    }
}

const carro1 = new Carro("prata");
const carro2 = new Carro("preto");

const carro3 = Carro.criarCarro("azul");

carro1.corDoCarro();

Carro.carrosCriados; // 2



class MinhasFuncoes {
    static metodo1() {

    }
    static metodo3() {
        
    }
    static metodo2() {
        
    }
}

MinhasFuncoes.metodo1()
MinhasFuncoes.metodo3()

const MinhasFuncoes2 = {
    metodo1() {

    },
    metodo3() {
        
    },
    metodo2() {
        
    }
}

MinhasFuncoes2.metodo4 = function() {}

MinhasFuncoes.metodo4 = function() {}

MinhasFuncoes.prototype.metodo4 = function() {}

