// @ts-nocheck

class MapComFind extends Map {
    filter(callback) {
        const novomap = new MapComFind();
        this.forEach((valor, chave) => {
            const resultado = callback(valor, chave);
            if(resultado) {
                novomap.set(chave, valor);
            }
        });
        return novomap;
    }
}

class Biblioteca extends MapComFind {
    set(chave, valor) {
        if(!(valor instanceof Livro)) {
            throw new Error("livro precisa ser uma instancia de Livro");
        }
        return super.set(chave, valor);
    }
    carregarLivro(livro) {
        const novolivro = new Livro(livro.nome, livro.descricao, livro.autor, this);
        this.set(novolivro.nome, novolivro);
    }
}

class Autores extends Map {
    set(chave, valor) {
        if(!(valor instanceof Autor)) {
            throw new Error("autor precisa ser uma instancia de Autor");
        }
        return super.set(chave, valor);
    }
    criarAutor(nome) {
        const autor = new Autor(nome);
        this.set(nome, autor);
    }
}

class Autor {
    constructor(nome) {
        this.nome = nome;
    }
}

class Livro {
    #autor;
    #autorclasse;
    constructor(nome, descricao, autor, biblioteca) {
        this.nome = nome;
        this.descricao = descricao;
        this.#autor = autor;
        this.#autorclasse;
        this.biblioteca = biblioteca;
    }
    get autor() {
        if(!this.#autorclasse) {
            this.#autorclasse = new Autor(this.#autor);
        }
        return this.#autorclasse;
    }
    buscarDoMesmoAutor() {
        return this.biblioteca.filter(item => item.autor.nome === this.autor.nome);
    }
}




const minhaBiblioteca = new Biblioteca();

const json = require("./biblioteca.json");
for(const item of json) {
    minhaBiblioteca.carregarLivro(item);
}

const livrodapepita = minhaBiblioteca.get("biografia da pepita");
const outroslivros = livrodapepita.buscarDoMesmoAutor();


console.log(outroslivros);


