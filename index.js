
let incremento = 0;

class Conta {
    #senha
    #cpf
    constructor(
        nome,
        cpf,
        saldo,
        telefone,
        identidade,
        senha,
        agencia
    ) {
        const saldoNumber = Number(saldo);
        if(isNaN(saldoNumber)) {
            throw new Error("saldo precisa ser um number");
        }
        if(saldoNumber < 0) {
            throw new Error("saldo precisa ser maior que 0");
        }

        this.rg = incremento++;
        this.nome = nome;
        this.#cpf = cpf;
        this.saldo = saldoNumber;
        this.telefone = telefone;
        this.identidade = identidade;
        this.#senha = senha;
        this.agencia = agencia;
    }

    get cpf() {
        return this.#cpf;
    }

    validarSenha(senha) {
        if(this.#senha === senha) {
            console.log("voce acessou a conta");
        } else {
            throw new Error("a senha está incorreta");
        }
    }

    sacar(valor) {
        if(valor > this.saldo) {
            throw new Error("voce nao possui esse valor na conta");
        }
        if(typeof valor !== "number") {
            throw new Error("o valor precisa ser um numero");
        }
        this.saldo -= valor;
        return {
            novosaldo: this.saldo,
            valorsacado: valor
        }
    }
    depositar(valor) {
        if(typeof valor !== "number") {
            throw new Error("o valor precisa ser um numero");
        }
        this.saldo += valor;
        return {
            novosaldo: this.saldo,
            valordepositado: valor
        }
    }
    pix(contaDestino, valor) {
        if(typeof valor !== "number") {
            throw new Error("o valor precisa ser um numero");
        }
        contaDestino.depositar(valor);
        this.sacar(valor);
        return `a conta ${contaDestino.nome} recebeu ${valor} de ${this.nome}`;
    }
}

const conta1 = new Conta("biruliro", "123.456.789-00", 404, 40028922, "0000001", "senha123admin", "2578/x");

const conta2 = new Conta("biruliro2", "123.456.789-00", 404, 40028922, "0000001", "senha123admin", "2578/x");

console.log(conta1.rg);
console.log(conta2.rg);
