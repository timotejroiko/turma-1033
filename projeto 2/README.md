# projeto de final de módulo 2 - bolas saltitantes

Neste projeto o nosso objetivo é criar uma animação em html canvas onde várias bolas estarão pulando e se movendo em direções aleatórias. O código deverá utilizar programação orientada a objetos, ou seja, deve usar funcionalidades tais como classes, métodos, atributos, etc... não é necessário utilizar tudo o que foi abordado durante as aulas, utilizamos o que faz sentido utilizar em cada situação.

## requisitos do projeto

O nosso programa deverá criar um canvas em uma página html. nesse canvas serão criados vários desenhos de círculos, ou bolas, com cores aleatórias.

O programa deverá rodar um script de atualização que re-desenha o canvas multiplas vezes por segundo, fazendo com que as bolas no canvas se movam.

A posição, direção e velocidade de casa bola deverá estar salva em algum lugar, e sempre que o script de atualização for executado, a posição de cada bola deverá ser atualizada, e o canvas re-desenhado.

exemplo de construção do programa:

- criação de uma classe para conter o canvas em si, incluindo métodos para desenhar nele
- criação de uma classe para as bolas saltitantes, contendo atributos de posição X e Y, e velocidade X e Y, com metodos para atualizar a sua posição baseado na sua velocidade
- deteção de colisão entre as bolas e as bordas do canvas, por exemplo verificar se a posição da bola vai alem dos limites do canvas, e nesse caso mudar a direção dela.

## ponto de partida

Nos arquivos index.html, style.css e main.js temos um ponto de patida para um canvas. A documentação do canvas pode ser encontrada aqui [https://developer.mozilla.org/pt-BR/docs/Web/API/Canvas_API](https://developer.mozilla.org/pt-BR/docs/Web/API/Canvas_API), e um tutorial pode ser encontrado aqui [https://developer.mozilla.org/pt-BR/docs/Web/API/Canvas_API/Tutorial](https://developer.mozilla.org/pt-BR/docs/Web/API/Canvas_API/Tutorial).

No ponto de partida temos um exemplo de como criar um canvas, algumas funções auxiliares e um exemplo de como desenhar no canvas.

Não é necessário explorar conceitos mais avançados do canvas, basta utilizar as funcionalidades do template para criar todos os desenhos do canvas.

## instalação e configuração

Este projeto não tem nenhum requisito de instalação e coniguração, pode ser rodado diretamente no seu navegador a partir do aqruivo index.html

## entrega

O trabalho final com o projeto elaborado deverá ser colocado em um repositório no github e enviado aos professores, de preferência até segunda-feira dia 4, mas podendo ser extendido até sexta-feira dia 8.
