// @ts-nocheck

"IIFE";

(async function(param1) {
    class A {
        constructor() {
            return new Promise(resolve => setTimeout(() => resolve(this), 5000))
        }
        async iniciar() {}
    }
    
    const a = await new A();

    console.log(a);
})(927958)

