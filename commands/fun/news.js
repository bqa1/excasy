
const Guild = require('../../models/news');
const { MessageEmbed } = require('discord.js');
const moment = require("moment")
moment.suppressDeprecationWarnings = true;
module.exports = {
    name: "news",
    description: "Send a random meme",
    botPerms: ["ATTTACH_FILES"],
    run: async (client, message, args) => {
const guildDB = await Guild.findOne({
    tag: '710465231779790849'
  });
  

  if(!guildDB) {
    const perm = new MessageEmbed()
    .setTitle("Something went wrong")
    .setColor("#2f3136")
        .setDescription("No news found")
    .setFooter(message.author.tag, message.author.displayAvatarURL())
    return message.reply({embeds: [perm] });
  }


    
    let embed = new MessageEmbed()
    .setColor("#2f3136")
  .setTitle(`Bot News`)
  .setDescription(`Publish date: \`\`\`${moment(guildDB.time).format("MMMM Do YYYY, h:mm:ss")} [${moment(guildDB.time).fromNow()}]\`\`\`\n\nNews: \`\`\`${guildDB.news}\`\`\``)
  .setTimestamp();

  message.reply({embeds: [embed]}).catch(() => {
    const perm = new MessageEmbed()
    .setTitle("Something went wrong")
    .setColor("#2f3136")
        .setDescription("No news found")
    .setFooter(message.author.tag, message.author.displayAvatarURL())
    return message.reply({embeds: [perm] });
  });

}
}