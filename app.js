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

console.log("Błąd! " +err)
});

process.on("unhandledRejection", (reason, promise, message) => {

      console.log("Błąd! " +reason)
  
    });


client.login(config.token)
  
