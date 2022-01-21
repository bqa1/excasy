const Discord = require("discord.js");
const config = require('./config')
const MessageEmbed = require("discord.js")
const moment = require("moment")
moment.locale("EN")
const mongoose = require("mongoose")
const fs = require("fs")
const { DisTube } = require("distube")
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


const { SpotifyPlugin } = require("@distube/spotify")
const { SoundCloudPlugin } = require("@distube/soundcloud")
client.distube = new DisTube(client, {
  leaveOnStop: false,
  emitNewSongOnly: true,
  emitAddSongWhenCreatingQueue: false,
  emitAddListWhenCreatingQueue: false,
  plugins: [
      new SpotifyPlugin({
          emitEventsAfterFetching: true
      }),
      new SoundCloudPlugin()
  ]
})

client.slash = new Discord.Collection;
client.snipes = new Discord.Collection();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
["commands", "events", "slash", "errors"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});





mongoose.connect(`${config.mongo}`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
.then(console.log("[DATABASE 2] Connected to database!")).catch((e)=>{
  console.log(`[DATABASE ERROR] ${e}`);
  })





//process.on("uncaughtException", (err, message) => {




//console.log("[ERROR] " +err)
//});

//process.on("unhandledRejection", (reason, promise, message) => {

//
 //     console.log("[ERROR] " +reason)
  
 //  });
//


const status = queue =>
    `Volume: \`${queue.volume}%\`  | Loop: \`${
        queue.repeatMode ? (queue.repeatMode === 2 ? "All Queue" : "This Song") : "Off"
    }\``
client.distube
    .on("playSong", (queue, song) =>
        queue.textChannel.send(
            ` Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${
                song.user
            }\n${status(queue)}`
        )
    )
    .on("addSong", (queue, song) =>
        queue.textChannel.send(
            `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
        )
    )
    .on("addList", (queue, playlist) =>
        queue.textChannel.send(
            ` Added \`${playlist.name}\` playlist (${
                playlist.songs.length
            } songs) to queue\n${status(queue)}`
        )
    )
    .on("error", (channel, e) => {
        channel.send(`An error encountered: ${e.toString().slice(0, 1974)}`)
        console.error(e)
    })
    .on("empty", channel => channel.send("Voice channel is empty! Leaving the channel..."))
    .on("searchNoResult", (message, query) =>
        message.channel.send(` No result found for \`${query}\`!`)
    )
    .on("finish", queue => queue.textChannel.send("Finished!"))
// // DisTubeOptions.searchSongs = true
// .on("searchResult", (message, result) => {
//     let i = 0
//     message.channel.send(
//         `**Choose an option from below**\n${result
//             .map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``)
//             .join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`
//     )
// })
// .on("searchCancel", message => message.channel.send(`${client.emotes.error} | Searching canceled`))
// .on("searchInvalidAnswer", message =>
//     message.channel.send(
//         `${client.emotes.error} | Invalid answer! You have to enter the number in the range of the results`
//     )
// )
// .on("searchDone", () => {})

client.login(config.token)
console.log("[PROCESS] starting")
