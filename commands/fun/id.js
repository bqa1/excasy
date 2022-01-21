const Discord = require("discord.js");
module.exports = {
    name: "id",
        cooldown: 5,
    aliases : [],
    description: "Show some id",
    category: "4fun",
    usage: "help (komenda)",
    run: async(client, message, args) => {

        const id = new Discord.MessageEmbed()
        .setColor("#2f3136")
        .setDescription(`Message ID: \`${message.id}\`\n channel ID: \`${message.channel.id}\`\nserver ID: \`${message.guild.id}\`\nmember ID: \`${message.author.id}\``)
        
        message.reply({embeds: [id]})
  }

}
