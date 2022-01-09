const config = require("../config.js");
const {MessageEmbed} = require("discord.js");

module.exports.run = (client) => {
  console.log(`${client.user.username} ✅`)

    client.user.setActivity("Rozwijam się!", { type: "LISTENING"});


}
