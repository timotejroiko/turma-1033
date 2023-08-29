

class A {
    constructor(parm1) {
        this.a = parm1;
        this.b = new B(this);
    }
    toString() {
        return "xyz";
    }
    valueOf() {
        return this.a;
    }
    toJSON() {
        return {
            a: this.a
        }
    }
}

class B {
    constructor(a) {
        this.a = a;
    }
    meuMetodo() {
        this.a.b.a.b.a.b.a.b.a.b.a.b.a.b.a.b.a.b.a.b;
    }
}

const a1 = new A(50);

console.log(JSON.stringify(a1));




