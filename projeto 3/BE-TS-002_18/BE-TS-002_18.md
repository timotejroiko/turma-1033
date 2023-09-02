Crie uma classe nomeada `Escola` com os seguintes métodos `adicionar`, `notasBaixas`.

- `adicionar(nome, nota)` deve adicionar em uma lista o nome e nota do aluno

- `notasBaixas()` deve retornar uma lista de alunos com notas baixas, onde as notas baixas são todas as notas menor ou igual a 5

exemplo de uso:

```js
const escola = new Escola();
escola.adicionar("João", 10);
escola.adicionar("Maria", 5);
escola.notasBaixas(); // [{ nome: "Maria", nota: 5 }];
```
