Observe a seguinte classe:

```js
class Coelho extends Animal {
  constructor() {
    super();
    this.name = "Coelho";
  }
} 
```
Crie uma classe nomeada `Animal` que será extendida pela classe `Coelho`, a classe `Animal` deverá atender o seguinte exemplo:
```
const coelho = new Coelho()
coelho.corre(5);
coelho.status(); // Coelho corre com velocidade 10
coelho.pare();
coelho.status(); // Coelho está parado
```
