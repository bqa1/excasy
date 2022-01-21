const Discord = module.require("discord.js");

module.exports = {
  name: "reverse",
  description: "Reverse text",
  run: async (client, message, args) => {
    let str = args.join(" ");
    if (!str) {
        const perm = new Discord.MessageEmbed()
        .setTitle("Something went wrong")
        .setColor("#2f3136")
            .setDescription("Provide an text")
        .setFooter(message.author.tag, message.author.displayAvatarURL())
        return message.reply({embeds: [perm] });
    }
    message.channel.send(str.split("").reverse().join(""));
  },
};