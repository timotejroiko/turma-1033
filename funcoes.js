

// retorna uma cópia da função, mas com um "this" diferente
// .bind()

// executa a funçao, mas com um "this" diferente
// .call()

// executa a funçao, mas com um "this" diferente
// .apply()

const obj = {
    abc: 10,
    metodo(param1, param2, param3) {
        console.log(this, param1);
    }
}

const obj2 = {
    abc: 50,
    xyz: "hehehe"
}


function minhafuncao() {
    console.log(this)
}

minhafuncao.call(obj2);

const minhafuncaodefinida = minhafuncao.bind({});

class A {
    constructor() {
        this.a = 10;
    }
    metodo1() {
        this.a;
    }
}

class B {
    constructor() {
        this.b = 40;
    }
    outrometodo() {

    }
    
}

const minhainstancia = new A();

const minhainstancia2 = new B();

minhainstancia.metodo1.call(minhainstancia2);


const a = [1,2,3,4,5];

Array.prototype.filter.call(a)

const minhalista = document.querySelectorAll("div");

Array.from(minhalista).filter(() => {});

[...minhalista].filter(() => {});



function normal() {
    this
}

const flecha = () => {
    this
};


class ABC {
    constructor() {
        this.a = [1,2,3,4,5];
        const a = 10;
        this.a.map(() => {
            this;
            a;
        })
        this.a.map((function() {
            // this??;
        }).bind(this))
    }
}


