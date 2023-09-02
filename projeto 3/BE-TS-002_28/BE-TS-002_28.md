Crie duas classes nomeadas `Animal` e `Corrida` com os seguintes atributos:

A classe Animal: `nome` e `velocidade`

A classe Corrida: `animais`, deve ser uma lista de instâncias da classe `Animal`

A classe Corrida deve possuir o método `resultado`

O método `resultado` retornará os três primeiros colocados, baseados na maior velocidade de cada animal

exemplo de uso

```js
const coelho = new Animal("Coelho", 5);
const cavalo = new Animal("Cavalo", 15);
const cheetah = new Animal("Cheetah", 25);
const onca = new Animal("Onça", 12);
const cachorro = new Animal("cachorro", 9);

const corrida = new Corrida([coelho, cheetah, cavalo, onca, cachorro]);

corrida.resultado(); // ["Cheetah", "Cavalo", "Onça"]);
```
