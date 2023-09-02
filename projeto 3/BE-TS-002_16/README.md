Observe a seguinte classe:

```js
class Usuario {
  usuarios = ["mario@luigi.com", "peach@apple.com"];

  constructor(email) {
    this.email = email;
  }

  esqueciSenha(email) {
    if (this.usuarios.includes(email)) {
      return EsqueciSenhaUtils.gerarToken(email);
    } else {
      return "E-mail não encontrado";
    }
  }

  validarToken(email, token) {
    return EsqueciSenhaUtils.validarToken(email, token);
  }
}
```

---

Crie uma classe nomeada `EsqueciSenhaUtils` com os seguintes métodos `gerarToken`, `validarToken`.

- `gerarToken(email)` deve retornar um `token` que foi associado ao `email`. O token pode ser do tipo `string` ou `number`, como por exemplo gerado pelo método `Math.random()`

- `validarToken(email, token)` deve validar se o token gerado é o mesmo que foi associado anteriormente ao email
