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
        console.log("Commande Salut effectué");
    }
});
    
