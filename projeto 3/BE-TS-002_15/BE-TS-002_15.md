Crie uma classe nomeada `Newsletter` com o atributo `email`.

O atributo `email` deve ser privado, no typescript é usado o modificador de acesso `private` no JS é usado o símbolo `#`.

Adicione o método `signup(email)` para inscrever o email

No caso do email não existir o retorno deverá ser: E-mail cadastrado com sucesso

No caso do email já tiver sido cadastrado previamente o retorno deverá ser: E-mail já se encontra cadastrado

exemplo de uso

```js
const js = new Newsletter();
js.signup("javascripto@js.com"); // E-mail cadastrado com sucesso
```

---

Nota: Utilize o `#` para esse exercício, exemplo simplificado de uso com #:

```js
  #atributoPrivado;
  ...
  this.#atributoPrivado = valor;
```
