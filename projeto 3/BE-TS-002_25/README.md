Crie duas classes nomeadas `Categoria` e `Artigo` com os seguintes atributos:

A classe Categoria: `nome`.

A classe Artigo: `titulo` e `categoria`, `categoria` deve ser uma instância da classe `Categoria`.

A classe Artigo deve possuir o método `setCategoria` que receberá o parâmetro do tipo `Categoria`.

exemplo de uso

```js
const categoria = new Categoria("Javascript");
const artigo = new Artigo("Orientação a Objetos");

artigo.setCategoria(categoria);
categoria.nome; // Javascript
artigo.categoria.nome; // Javascript
artigo.titulo; // Orientação a Objetos
```
