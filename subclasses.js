// @ts-nocheck

class ClasseMae {
    #numero
    constructor(meunumero) {
        if(this.constructor.name === "ClasseMae") {
            throw new Error("essa classe não pode ser instanciada diretamente");
        }
        this.#numero = meunumero;
        this.string = "abc";
    }

    meuMetodo() {
        return this.#numero;
    }
}

class Filha extends ClasseMae {
    constructor(meunumero) {
        super(meunumero);
    }

    meuMetodo() {
        return super.meuMetodo().toString();
    }
}

const b = new Filha(10);
b.meuMetodo;

class FormaGeometrica {
    calcularArea() {

    }
}

class Retangulo extends FormaGeometrica {
    calcularArea() {

    }
}

class Triangulo extends FormaGeometrica {
    calcularArea() {

    }
}

const triangulo = new Triangulo();

const retangulo = new Retangulo();

triangulo.calcularArea();
retangulo.calcularArea();



