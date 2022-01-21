const Discord = require("discord.js");
const malScraper = require('mal-scraper');

module.exports = {
  name: "animesearch",
  category: "4fun",
  aliases : ["anime"],
description: "Get info about an anime",
run: async (client, message, args) => {
        const search = `${args}`;
        if(!search) {
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
                .setDescription("Provide an title")
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [perm] });
        }

        

      const animes =  malScraper.getInfoFromName(search)
          .then((data) => {
          const malEmbed = new Discord.MessageEmbed()
            .setAuthor(` Anime List search result for ${args}`.split(',').join(' '))
            .setThumbnail(data.picture)
            .setColor("#2f3136")
            .addField('English Title', `\`${data.englishTitle}\``, )
            .addField('Japanese Title', `\`${data.japaneseTitle}\``, )
            .addField('Type', `\`${data.type}\``, )
            .addField('Episodes', `\`${data.episodes}\``, )
            .addField('Rating', `\`${data.rating}\``, )
            .addField('Aired', `\`${data.aired}\``, )
            .addField('Score', `\`${data.score}\``, )
            .addField('Score Stats', `\`${data.scoreStats}\``, )
            .addField('Link', `[click](${data.url})`)

            message.channel.send({ embeds: [malEmbed] });

          })
          if(!animes ){ 
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
                .setDescription("No anime found")
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [perm] });
          }
          
}
};