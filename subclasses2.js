class MeuMap extends Map {
    map(callback) {
        const novomap = new MeuMap();
        this.forEach((valor, chave) => {
            const resultado = callback(valor, chave);
            novomap.set(chave, resultado);
        });
        return novomap;
    }
}


const meumap = new MeuMap();
meumap.set("chave1", 10);
meumap.set("chave2", 50);
meumap.set("abc", 2358273076203);

const novomap = meumap.map((valor, chave) => {
    return valor + 1;
});

console.log(novomap);
