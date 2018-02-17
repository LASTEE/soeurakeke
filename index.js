const Discord = require('discord.js')

var bot = new Discord.Client();

bot.on('ready', function() {
    bot.user.setGame("La Soeur à Kéké, !help");
    console.log("Connectedç");
});

bot.login("NDE0MjM1MjY0NzMxMzE2MjQ0.DWkqXA.D7DukYjJnwTGX806Qw3ZYZ45ZP8");


bot.on('message', message =>{
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour mon mignon <3");
        console.log("Commande Salut effectué");
    }
});
    
