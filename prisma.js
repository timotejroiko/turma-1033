// @ts-nocheck

class Prisma {
    constructor(lados) {
        this.lados = lados;
        this.perimetro = this.calcularPerimetro();
    }
    calcularPerimetro() {
        return this.lados.reduce((acumulador, lado) => acumulador + lado, 0);
    }
}

class Triangulo extends Prisma {
    constructor(lados) {
        if(lados.length !== 3) {
            throw new Error("um triangulo precisa ter 3 lados");
        }
        super(lados);
    }
    calcularArea() {
        const area = this.lados[0] * this.lados[1] / 2;
        return area;
    }
}

class Retangulo extends Prisma {
    constructor(lados) {
        if(lados.length !== 4) {
            throw new Error("um retangulo precisa ter 4 lados");
        }
        super(lados);
    }
    calcularArea() {
        const area = this.lados[0] * this.lados[1];
        return area;
    }
}

class Quadrado extends Retangulo {
    constructor(lados) {
        if(lados.some(lado => lado !== lados[0])) {
            throw new Error("um quadrado precisa ter 4 lados identicos");
        }
        super(lados);
    }
}

class Pentagono extends Prisma {
    constructor(lados) {
        if(lados.length !== 5) {
            throw new Error("um pentagono precisa ter 5 lados");
        }
        super(lados);
    }
    calcularArea() {
        throw new Error("não é possivel calcular a área de um pentágono");
    }
}


const meuRetangulo = new Retangulo([10,5,5,10]);

const meuTriangulo = new Triangulo([10,5,5,10]);

console.log(meuTriangulo.calcularArea());
