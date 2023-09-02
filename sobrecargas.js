// @ts-nocheck


class A {
    constructor(parm1) {
        this.a = parm1;
        this.b = new B(this);
    }
    toString() {
        return "xyz";
    }
    valueOf() {
        return 50;
    }
    toJSON() {
        return {
            a: this.a
        }
    }
}

"a" + {}; // "a1"
1 + {};

const a = {};
a.toString();
a.valueOf();

const meuA = new A();
"a" + meuA; // "axyz"
1 + meuA; // 51


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




