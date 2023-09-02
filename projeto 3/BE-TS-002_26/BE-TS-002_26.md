Crie três classes nomeadas `Cargo`, `Trabalhador` e `Empresa` com os seguintes atributos:

A classe Cargo: `nome` e `salario`.

A classe Trabalhador: `nome` e `cargo`, `cargo` deve ser uma instância da classe `Cargo`

A classe Empresa: `trabalhadores`, `trabalhadores` deve ser uma lista de instâncias da classe `Trabalhador`

A classe Empresa deve possuir os métodos `contratar` e `listarFuncionarios`

O método `contratar` receberá um parâmetro do tipo `Trabalhador`.

O método `listarFuncionarios` retornará uma lista de objetos do tipo `Trabalhador`

exemplo de uso

```js
const cargo = new Cargo("Programador Javascript jr", 8000);
const trabalhador1 = new Trabalhador("Mark", cargo);
const trabalhador2 = new Trabalhador("Jeff", cargo);
const empresa = new Empresa();

empresa.contratar(trabalhador1);
empresa.contratar(trabalhador2);

cargo.nome; // Programador Javascript jr
trabalhador1.cargo.nome; // Programador Javascript jr
trabalhador1.nome; // Mark
trabalhador2.cargo.nome; // Programador Javascript jr
trabalhador2.nome; // Jeff

empresa.listarFuncionarios();
// [
//   {
//     cargo: { nome: "Programador Javascript jr", salario: 8000 },
//     nome: "Mark",
//   },
//   {
//     cargo: { nome: "Programador Javascript jr", salario: 8000 },
//     nome: "Jeff",
//   },
// ]
```
