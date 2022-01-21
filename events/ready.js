const mongoose = require("mongoose")
const { mongo } = require("../config.js")
const config = require('../config.js');
const webhookClient = new Discord.WebhookClient(config.webhook_id, config.webhook_url);
const MessageEmbed = require("discord.js")
module.exports.run = async (client) => {

    console.log(`[CLIENT] ${client.user.username} ready`);
    client.user.setActivity("Prefix: . || Beta!",{
      type: "STREAMING",
      url: "https://www.twitch.tv/excasy"
  });
 
  

}