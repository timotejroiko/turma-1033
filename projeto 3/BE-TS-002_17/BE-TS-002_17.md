Crie uma classe nomeada `Escola` com os seguintes métodos `adicionar`, `media` e `ranking`.

- `adicionar(nome, nota)` deve adicionar em uma lista o nome e nota do aluno

- `media()` deve retornar a média aritmética das notas de todos alunos adicionados

- `ranking()` deve retornar uma lista de alunos e suas respectivas notas, essa lista deve ser ordenada com base nas notas, da maior para a menor

exemplo de uso:

```js
const escola = new Escola();
escola.adicionar("João", 10);
escola.adicionar("Maria", 5);
escola.adicionar("Maurício", 7);
escola.adicionar("Alice", 7);
escola.media(); // 7.5
escola.ranking();
// [
//   { nome: "João", nota: 10 },
//   { nome: "Maurício", nota: 7 },
//   { nome: "Alice", nota: 7 },
//   { nome: "Maria", nota: 5 },
// ]
```
