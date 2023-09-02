Observer a seguinte classe:

```js
class Empresa {
  listaDeEmpregados = [
    {
      nome: "João Silva",
      salario: 1500,
    },
    {
      nome: "Maria José",
      salario: 2500,
    },
    {
      nome: "Simplício Simplório",
      salario: 2400,
    },
    {
      nome: "Mario João",
      salario: 2100,
    },
  ];

  mediaSalarial() {
    return Relatorio.mediaSalarial(this.listaDeEmpregados);
  }

  menorSalario() {
    return Relatorio.menorSalario(this.listaDeEmpregados);
  }
  maiorSalario() {
    return Relatorio.maiorSalario(this.listaDeEmpregados);
  }
}
```

Crie uma classe `Relatorio` com os métodos `mediaSalarial`, `menorSalario` e `maiorSalario` que atenda o uso da classe acima.

O retorno do método `mediaSalarial` deve ser um `Number`.

O retorno dos métodos `menorSalario` e `maiorSalario` deve ser um objeto no seguinte formato `{ nome: "Simplício Simplório", salario: 2400 }`.
