const config = require("../config.js");
const {MessageEmbed} = require("discord.js");

module.exports.run = (client) => {
  console.log(`[CLIENT] ${client.user.username} starting`)

    client.user.setActivity("My main prefix is .", { type: "LISTENING"});


}
