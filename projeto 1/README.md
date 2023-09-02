# projeto de final de módulo 1 - Discord Bot

Neste projeto o nosso objetivo é criar um bot para discord. O código do bot deverá utilizar programação orientada a objetos, ou seja, deve usar funcionalidades tais como classes, métodos, atributos, etc... não é necessário utilizar tudo o que foi abordado durante as aulas, utilizamos o que faz sentido utilizar em cada situação.

## requisitos do projeto

O bot deve conter uma funcionalidade de "economia", ou seja, cada usuario terá uma conta no bot onde terá o seu dinheiro virtual, e poderá usar comandos para "trabalhar" para ganhar dinheiro e comandos para transferir dinheiro para outros usuários.

Exemplo de comandos que queremos ter:

- `!trabalhar` - recebe uma quantia de dinheiro. este comando deve ter um "cooldown", ou seja, o usuario deve ser impedido de utiliza-lo novamente até que uma certa quantidade de tempo passe.
- `!conta` - exibe informaçoes sobre a conta do usuario, incluindo quando dinheiro ele tem
- `!transferir [valor] [usuario]` - transfere um valor para outro usuário
- `!apostar [valor]` - um minigame de apostas onde o usuario pode apostar um valor ter uma chance de ganhar dinheiro, ou perde-lo.

Opcionalmente poderá criar outros comandos e funcionalidades também, tais como outros minigames onde o usuario poderá gastar o seu dinheiro, se assim desejar.

Exemplo da construção do programa:

- criação de uma classe para cada usuário, contendo suas informações e seu dinheiro
- transformação do autor da mensagem em instancia da classe de usuário
- utilização dos metodos do usuario para executar a funcionalidade dos comandos

Ter um armazenamento persistente não é necessário, pode usar um array, objeto ou Map para salvar os dados dos usuarios, mas se quiser se aventurar com bibliotecas de bases de dados tais como sqlite ou quick.db será muito bem vindo(a).

## ponto de partida

No arquivo index.js tem um ponto de patida para um bot, utilizando a biblioteca `discord.js`. Esta biblioteca é 100% orientada a objetos, e a sua documentação pode ser encontrada no site [https://old.discordjs.dev/#/docs/discord.js/main/general/welcome](https://old.discordjs.dev/#/docs/discord.js/main/general/welcome).

No ponto de partida temos um evento nos informando de que uma mensagem foi postada no discord, este evento inclui todas as informações da mensagem, tais como autor e conteudo, e em seguida temos um método onde postamos uma mensagem no discord como resposta.

Não é necessário explorar conceitos mais avançados do discord.js, basta utilizar o template fornecido, mas será bem vindo a faze-lo se quiser.

## instalação e configuração

Para iniciar o projeto a partir do template fornecido, é necessário ter instalado o `Node.js`, caso não tenha ele instalado, poderá instala-lo aqui [https://nodejs.org/pt-br](https://nodejs.org/pt-br). (qualquer versão serve, desde que seja 16 ou acima)

Após ter o Node.js instalado (poderá confirmar a sua instalação executando `node -v` no seu console/cmd/terminal), deverá instalar a biblioteca discord.js, poderá instala-lo com o comando `npm install discord.js` no seu console/cmd/terminal (certifique-se que o seu console/cmd/terminal esteja aberto na pasta correta)

com tudo instalado poderá começar rodando o seu bot com o comando `node index.js`;

## discord

Para obter um token para o seu bot, deverá ir em [https://discord.com/developers/applications](https://discord.com/developers/applications) e fazer login com a sua conta Discord e criar uma nova aplicação.

Na página da aplicação, entre na aba Bot, clique no botao "reset token" para obter o seu novo token.

Ainda na mesma página, um pouco mais para baixo, deverá habilitar a opção "MESSAGE CONTENT INTENT", para que o seu bot possa acessar o conteúdo das mensagens recebidas.

Para adicionar o seu bot no servidor da turma, entre na aba "oauth2" e na sub-aba "url generator", selecione o escopo "bot", e no final da página terá o seu link de convite para convidar o bot para o seu servidor. Talvez precise pedir a algum moderador/administrador da turma para consguir adiciona-lo no servidor da turma.

## entrega

O trabalho final com o projeto elaborado deverá ser colocado em um repositório no github e enviado aos professores, de preferência até segunda-feira dia 4, mas podendo ser extendido até sexta-feira dia 8.
