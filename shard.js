const config = require('./config.js');
const Discord = require('discord.js');
const Statcord = require("statcord.js");
const { token } = require('./config.js');


const manager = new Discord.ShardingManager('./app.js', {
  token: token,
  autoSpawn: true,
  totalShards: 'auto',
  totalShards: 4
});

manager.spawn()
manager.on('shardCreate', shard => console.log(`Startujemy sharda #${shard.id}! [${new Date()}]`));

process.on("unhandledRejection", (reason, promise, message) => {

    console.log("Błąd! " +reason)

  });
