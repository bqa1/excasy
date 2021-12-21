const Discord = require("discord.js");
const config = require("./config.js");

const moment = require("moment")
moment.locale("EN")
const fs = require("fs")
const client = new Discord.Client({
  fetchAllMembers: true,
  allowedMentions: {
    parse: ["roles", "users"],
    repliedUser: false,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: [
    "GUILDS","GUILD_BANS", "GUILD_VOICE_STATES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MEMBERS"],
});
const { Player } = require("discord-player");

const player = new Player(client); 
client.player = player;
client.slashCommands = new Discord.Collection;
client.snipes = new Discord.Collection();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
["commands", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});








//process.on("uncaughtException", (err, message) => {

 // const ownerk = new Discord.MessageEmbed()
 // .setColor("#2f3136")
 // .setTitle(`Something went wrong`)
 // .setDescription("Error?" + err)
//  .setFooter(message.author.tag, message.author.displayAvatarURL())
  //message.channel.send({embeds: [ownerk]})

  //const owner = new Discord.MessageEmbed()
 // .setColor("#2f3136")
//  .setTitle(`Something went wrong`)
//.addField("Error", `\`${err}\``)

//client.channels.cache.get("921805926598602793").send({embeds: [owner]})

//console.log("Błąd! " +err)
//});

//process.on("unhandledRejection", (reason, promise, message) => {
//  const owner = new Discord.MessageEmbed()
 // .setColor("#2f3136")
 // .setTitle(`Something went wrong`)
//.addField("Promise", `\`${promise}\``)
//.addField("Error", `\`${reason}\``)

//client.channels.cache.get("921805926598602793").send({embeds: [owner]})

   //   console.log("Błąd! " +reason)
  
 //  });


client.login(config.token)
console.log("[PROCESS] starting")
