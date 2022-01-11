const {MessageEmbed} = require("discord.js");

module.exports = {
  name: "ping",
  description: "pong",
  options: null,
  run: async (client, interaction, args) => {

    let start = Date.now();

    let embed1 = new MessageEmbed()
    .setDescription("Obliczanie...")
    .setColor("#2f3136")

    await interaction.reply({
        embeds: [embed1]
      })
        let end = Date.now();

        let embed = new MessageEmbed()
          .setTitle("Ping Pong")
          .addField("API", `${Math.round(client.ws.ping)}ms`, true)
          .addField("Bot", `${end - start}ms`, true)
          .setColor("#2f3136")
       interaction.editReply({ embeds: [embed] }).catch((e) => interaction.followUp(e));
  },
};