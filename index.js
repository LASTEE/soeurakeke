const Discord = require('discord.js')
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("Connectedç");
});

bot.login("NDE0MjM1MjY0NzMxMzE2MjQ0.DWkwvw.eq7Nh-OC9DUwIJx9iDRXPwSjoeg");


bot.on('message', message =>{
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour mon mignon <3 :)");
        console.log("Commande Salut effectué");
    }
    
    if (message.content === "Ca va ?"){
        message.reply("Encore mal d'hier soir et toi ?");
        console.log("Commande Pétasse effectué");
    }
    if (message.content === "C'est une michto"){
        message.reply("Absolument pas de l'argent j'en ai déja");
        console.log("Commande Je pèse dans le game effectué");
    }
    if (message.content === "T'es une michto"){
        message.reply("Absolument pas de l'argent j'en ai déja");
        console.log("Commande Je pèse dans le game effctué");
    }
    if (message.content === "Moi ca va pas bien"){
        message.reply("Pourquoi donc chéri ?");
        console.log("Commande Pourquoi effectué");
    }
});
    
