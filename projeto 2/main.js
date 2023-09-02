// obtemos o elemento canvas do nosso html
const canvas = document.querySelector('canvas');

// acessamos o seu contexto de desenho em 2d
const ctx = canvas.getContext('2d');

// aqui alteramos as dimensões do nosso canvas para ficar do mesmo tamanho da tela do navegador
// observe que estamos fazendo duas coisas simultaneamente:
// estamos configurando as dimensões do canvas atraves dos seus setters (canvas.width = largura e canvas.height = altura)
// e simultaneamente estamos retornando as dimenções definidas e as atribuindo ás variáveis largura e altura
const largura = (canvas.width = window.innerWidth);
const altura = (canvas.height = window.innerHeight);

// aqui temos uma função para gerar um numero aleatório entre um minimo e um máximo
// podemos utilizar esta função para definir uma certa aleatoriedade nas nossas bolas
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// aqui temos uma função para gerar uma cor aleatória no formato rgb(vermelho,verde,azul)
// podemos utilizar esta função para definir cores aleatórias nas nossas bolas
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// aqui temos um exemplo de como desenhar no nosso canvas, queremos posteriormente transformar essa função em um método de uma classe
function desenhar(ctx, x, y, raio) {
    ctx.beginPath(); // inicia um "traço"
    ctx.strokeStyle = "#aaa"; // define a cor do traço
    ctx.fillStyle = "#eee"; // define a cor do preenchimento
    ctx.arc(x, y, raio, 0, 2 * Math.PI); // traça um círculo na posição x e y, com um raio, com iniçio no angulo 0, e terminando no angulo 2PI, ou seja, um círculo completo
    ctx.fill(); // preenche o circulo com a nossa cor de preenchimento
}

// aqui temos uma função para "apagar" o nosso canvas, desenhando um retangulo branco por cima de tudo
function apagar(ctx) {
    ctx.fillStyle = "#fff"; // define a cor de preenchimento
    ctx.fillRect(0, 0, largura, altura); // preenche um retangulo começando na coordenada X = 0, e Y = 0, e terminando na coordenada X = largura e Y = altura
}

// aqui temos um exemplo de como criar uma animaçao
function animacao() {
    // aqui deveremos recalcular as posições das bolas
    // depois apagamos o desenho atual
    apagar();
    // colocamos o novo desenho
    desenhar();
    // iniciamos um loop recursivo
    // esta funçao é especifica dos navegadores, ela funciona como um timer que espera o momento exato de repetir para garantir uma animacao fluida de acordo com a tela do seu computador
    // por exemplo para manter uma animação em 60 fps (60 quadros por segundo), o intervalo entre cada desenho deverá ser 16.6ms
    requestAnimationFrame(animacao);
}
