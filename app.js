const Discord = require("discord.js");
const config = require("./config.js");

const client = new Discord.Client({
  fetchAllMembers: false,
  allowedMentions: {
    parse: ["roles", "users"],
    repliedUser: false,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: [
    "GUILDS","GUILD_BANS", "GUILD_VOICE_STATES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MEMBERS"],
});

client.cooldowns = new Discord.Collection();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
["commands", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

process.on("uncaughtException", (err, message) => {

  const erroremb = new Discord.MessageEmbed()
.setColor("#2f3136")
.setTitle("ERROR")
.addField("Error", `\`${err}\``)

client.channels.cache.get("921805926598602793").send({embeds: [erroremb]})
    

console.log("Błąd! " +err)
});

process.on("unhandledRejection", (reason, promise, message) => {

const erroremb = new Discord.MessageEmbed()
.setColor("#2f3136")
.setTitle("ERROR")
.addField("Promise", `\`${promise}\``)
.addField("Error", `\`${reason}\``)

 return client.channels.cache.get("921805926598602793").send({embeds: [erroremb]})
    

console.log("Błąd! " +reason)
  
   });


client.login(config.token).catch(() => {
  throw new Error('Invaild token! visit https://discord.com/developers/applications/757308157855793232/bot for new token')
})
console.log("[PROCESS] starting")
