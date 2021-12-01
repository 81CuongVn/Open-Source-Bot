//Discord package
const Discord = require('discord.js');

//creates a Discord client
const Client = new Discord.Client()

//loads the settings
const sett = require('./settings.json');

//sets status and logs when start
Client.on("ready", () => {
Client.user.setActivity(`${sett.activity}`);
console.log(`${Client.user.tag} Is Online`)
});

//starts the bot
Client.login(process.env.TOKEN);