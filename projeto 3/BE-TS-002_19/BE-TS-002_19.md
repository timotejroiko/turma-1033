Crie uma classe nomeada `Imposto` com o seguinte método `consultarImposto`.

- `consultarImposto(salario)` deve retornar a porcentagem de acordo com a tabela de imposto cobrado em cima do salário base, utilizando a tabela a seguir

---

- de 0,00 até 1.903,98 = 0%
- de 1.903,99 até 2.826,65 = 7.5%
- de 2.826,66 até 3.751,05 = 15%
- de 3.751,06 até 4.664,68 = 22.5%
- acima de 4.664,68 = 27.5%

---

exemplo de uso:

```js
const imposto = new Imposto();
imposto.consultarPorcentagem(1900); // 0
imposto.consultarPorcentagem(1903.99); //7.5;
```
