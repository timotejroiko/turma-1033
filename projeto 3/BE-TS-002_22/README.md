Crie uma classe nomeada `Analisador` com os seguintes métodos `adicionar(name, email)` e `converterParaObjeto()`

O método `converterParaObjeto` irá retornar um objeto com o `name` e `email` que foi adicionado.

exemplo de uso

```js
const analisador = new Analisador();
analisador.adicionar("João", "joao@email.com");
analisador.converterParaObjeto(); // { email: "joao@email.com", name: "João" }
```
