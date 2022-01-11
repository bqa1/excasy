const { MessageEmbed } = require('discord.js');
const { MessageAttachment } = require('discord.js');


module.exports = {
    name: 'drip',
    description: 'c00l',
    options: [{
         name: "user",
         description: "Oznacz kogoś",
         type: "USER",
         required: true
    }],
    run: async(client, interaction, args) => {
        let member = interaction.options.getUser('user')
        const image = `https://api.popcat.xyz/drip?image=${member.displayAvatarURL({ format: "png", dynamic: true })}`;
        const attachment = new MessageAttachment(image, `invert.png`);
        const embed = new MessageEmbed()
        .setTitle(`💎・Drip!`)
        .setColor("#2f3136")
          .setImage('attachment://invert.png')
          .setTimestamp()
        
          interaction.reply({ 
        embeds: [embed],
        files: [attachment]
         })
    }
}