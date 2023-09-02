// importamos a biblioteca discord.js
const { Client, GatewayIntentBits } = require("discord.js");

// criamos uma instancia do cliente discord.js
// o construtor da classe Client recebe um objeto como parametro
// o objeto contem todo o tipo de opçoes de configuração do Client
// a opção intents é obrigatória pelo Discord, ela define que tipo de eventos o Discord deve enviar para o nosso bot
// o objeto GatewayIntentBits fornece um atalho para definirmos quais eventos queremos receber
// aqui estamos informado ao Discord que queremos receber eventos sobre Guilds, ou seja quando o nosso bot entra e sai de servidores
// e tambem eventos sobre GuildMessages, ou seja quando sao postadas, editadas ou deletadas mensages em servidores
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// aqui temos o evento "ready", que é executado quando o nosso bot conecta com sucesso nos servidores do Discord.
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


// aqui temos o evento "messageCreate", que é executado sempre que o bot detecta que alguem postou uma mensagem no servidor.
client.on('messageCreate', (message) => {
    // o parametro message é uma instancia da classe Message (veja na documentação do discord.js)
    // ela contem todas as informações sobre a mensagem que foi postada, incluindo o seu conteudo e o seu autor

    const conteudo = message.content; // exemplo de acesso ao conteudo da mensagem
    const autor = message.author; // exemplo de acesso ao autor da mensagem

    if(conteudo === "AAA") {
        // message.channel é um atributo que contém uma instancia da classe TextChannel (veja na documentação do discord.js)
        // esta instancia representa o canal onde a mensagem foi postada
        // ela tambem possui o metodo "send()", que permite postar uma mensagem no canal em questão, e assim responder á mensagem postada
        message.channel.send("BBB");
    }
});

// aqui iniciamos o login do discord, fazendo com que ele conecte e ative o seu sistema de eventos que criamos acima.
client.login("meu token do discord");
