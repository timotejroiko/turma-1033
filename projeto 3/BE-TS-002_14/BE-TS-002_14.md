Crie uma classe nomeada `Usuario` com os seguintes atributos `name`, `username`, `password`.

O atributo `password` deve ser privado, no typescript é usado o modificador de acesso `private`, no JS é usado o símbolo `#`.
Adicione o método `login(username, password)` para autenticar o usuário

No caso do usuário e senha forem iguais aos cadastrados o retorno deverá ser: Login realizado com sucesso
No caso do usuário e senha forem diferentes aos cadastrados o retorno deverá ser: Falha na autenticação
exemplo de uso

```js
const js = new Usuario("JavaScript", "js", "myPassw0rd!");
js.login("js", "myPassw0rd!"); // Login realizado com sucesso
```

---

Nota: Utilize o `#` para esse exercício, exemplo simplificado de uso com #:

```js
  #atributoPrivado;
  ...
  this.#atributoPrivado = valor;
```
