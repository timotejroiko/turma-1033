Crie uma classe `Animal` com os métodos `corre`, `pare`, `status`.

O método `corre` deve aceitar um parametro para definir a velocidade do animal

O método `pare` deve definir a velocidade do animal como 0

O método `status` deve retornar uma das seguintas strings: para velocidade superior a 0 `${animal} corre com velocidade ${velocidade}`, pare velocidade igual a 0 `${animal} está parado`

Exemplo de entrada de dados:
```
const animal = new Animal("Cachorro")
animal.corre(5);
animal.status(); // Cachorro corre com velocidade 10
animal.pare();
animal.status(); // Cachorro está parado
```
