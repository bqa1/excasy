const {Permissions} = require("discord.js")
const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
module.exports.run = async (client, interaction) => {
    await interaction.deferUpdate();
    if (interaction.isButton()) {
        if (interaction.customId === 'tic') {
   
            const channel = await interaction.guild.channels.create(
                `ticket-${interaction.user.id}`, {
                  topic: `Ticket created by: ${interaction.user.id}`
                }
            );
            if (channel.permissionsFor(interaction.guild.roles.everyone).has(Permissions.FLAGS.VIEW_CHANNEL)) {
              channel.permissionOverwrites.create(interaction.guild.id, {VIEW_CHANNEL: false})
            }          
            channel.permissionOverwrites.edit(interaction.user.id, {VIEW_CHANNEL: true, SEND_MESSAGES: true})
            const embed = new MessageEmbed()
                .setTitle('Ticket 📋')
                .setDescription(`> Thank you for contacting our team.
                > **Describe your problem in detail.**
                > We will try to answer as soon as possible!`)
                .setColor('#2f3136')
                .setTimestamp()
                .setFooter(`${interaction.guild.name}`, `${interaction.guild.iconURL()}`)
   
            const del = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                    .setCustomId('del')
                    .setLabel('🗑️ Close ticket')
                    .setStyle('DANGER'),
                );
            channel.send({
                content: `||<@${interaction.user.id}>||`,
                embeds: [embed],
                components: [del]
            }).then(interaction.followUp({
                content: `${interaction.user.tag} **-** a ticket has been **opened!**`,
                ephemeral: true
            })) 
        } else if (interaction.customId === 'del') {
   
            const channel = interaction.channel
   
            if (channel.topic.split(":")[1].trim() == interaction.user.id || interaction.member.permissions.has("ADMINISTRATOR")) {
              channel.delete();
            }      
        }
      }
  }