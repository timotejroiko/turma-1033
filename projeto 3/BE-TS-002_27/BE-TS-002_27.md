Crie duas classes nomeadas `Post` e `Blog` com os seguintes atributos:

A classe Post: `titulo` e `dataPublicacao`

A classe Blog: `posts`, deve ser uma instância da classe `Post`

A classe Blog deve possuir os métodos `publicar`, `antigos` e `novos`

O método `publicar` receberá um parâmetro do tipo `Posto`.

Os método `antigos` e `novos` retornará uma lista de títulos dos posts ordenados pelo mais antigo/novos

exemplo de uso

```js
const post1 = new Post("Como aprender mais rápido!", new Date(1988, 11, 24));
const post2 = new Post("Como desaprender mais rápido!", new Date(2006, 1, 4));
const blog = new Blog();

blog.publicar(post1);
blog.publicar(post2);

expect(blog.antigos())
// [
//   "Como aprender mais rápido!",
//   "Como desaprender mais rápido!",
// ]
expect(blog.novos())
// [
//   "Como desaprender mais rápido!",
//   "Como aprender mais rápido!",
// ]
```
