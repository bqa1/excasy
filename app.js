const Discord = require("discord.js");
const config = require("./config.js");
const { Player } = require("discord-music-player");
const moment = require("moment")
moment.locale("EN")

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
const player = new Player(client, {
  leaveOnEmpty: false,
})

client.player = player
client.snipes = new Discord.Collection();
client.cooldowns = new Discord.Collection();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
["commands", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
client.login(config.token)
console.log("Uruchamiam...")