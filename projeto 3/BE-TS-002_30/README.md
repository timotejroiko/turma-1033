Observe as seguintes classes:

```js
class Aluno {
  nome;
  constructor(nome) {
    this.nome = nome;
  }
}

class Professor {
  nome;
  constructor(nome) {
    this.nome = nome;
  }
}

class Escola {
  pessoas = [];

  add(pessoa) {
    this.pessoas.push(pessoa);
  }

  listarProfessores() {
    return UtilsFiltrar.porTipoDeClasse(this.pessoas, Professor);
  }

  listarAlunos() {
    return UtilsFiltrar.porTipoDeClasse(this.pessoas, Aluno);
  }
}
```

---

Crie uma classe nomeada `UtilsFiltrar` com o método estático `porTipoDeClasse`, que receberá a lista de pessoas e o critério de filtragem

exemplo de uso:

```js
const escola = new Escola();
escola.add(new Professor("João Prof"));
escola.add(new Professor("Maria Profa"));
escola.add(new Aluno("João"));
escola.add(new Aluno("Maria"));

escola.listarProfessores();
// [
//   { nome: "João Prof" },
//   { nome: "Maria Profa" },
// ]
```
