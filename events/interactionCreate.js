const {Permissions} = require("discord.js")
const Discord = require("discord.js")
const emotes = require("../emotes.json")
const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const confik = {
    owners: ["918865542746632254", "748479606457237554"]
}
const { prefix: dPrefix } = require("../../config.js");
const db = require("quick.db")
let prefix = db.get(`prefix_${message.guild.id}`)
if (prefix === null) prefix = dPrefix;
module.exports.run = async (client, interaction, message) => {




  
    if (interaction.isCommand()) {

        //       await interaction.deferReply({ ephemeral: false }).catch(() => {});
       
               const cmd = client.slash.get(interaction.commandName);
               cmd.run(client, interaction);

               if (cmd.ownerOnly) {
                if (!confik.owners.includes(message.author.id)) {
                    const ownerk = new Discord.MessageEmbed()
                        .setColor("#2f3136")
                        .setTitle(`Something went wrong`)
                        .setDescription("Only devs can use this command")
                    
          
                    return interaction.reply({embeds: [ownerk]});
                }
            }
           }

    if (interaction.isButton()) {
        if (interaction.customId === 'mod') {
            const embed = new MessageEmbed()
            .setColor("#2f3136")
        .setDescription(`[My prefix is ${prefix}](https://excasy.pl/)`)
        .addField(`>>> ${emotes.certified_moderator}・Mod`, "\n\`\`\` clear, clearm, ban, reset, tempmute, mute, unmute, unban, addrole, delrole, lock, unlock, backup \`\`\`")
        await interaction.update({embeds: [embed]})
        }
        if (interaction.customId === 'fun') {
            const embed = new MessageEmbed()
            .setColor("#2f3136")
        .setDescription(`[My prefix is ${prefix}](https://excasy.pl/)`)
        .addField(`>>> ${emotes.like}・4fun`, "\n\`\`\` id, emojify, animesearch, reverse, iq, invert, sus, zalgo, meme, 8ball, discrim, \`\`\`")
        await interaction.update({embeds: [embed]})
        }
        if (interaction.customId === 'config') {
            const embed = new MessageEmbed()
            .setColor("#2f3136")
        .setDescription(`[My prefix is ${prefix}](https://excasy.pl/)`)
        .addField(`>>> ${emotes.settings}・Conifg`, "\n\`\`\` prefix, antyinvite, antylink, modlog, welcome, ticket \`\`\`")
        await interaction.update({embeds: [embed]})
        }
        if (interaction.customId === 'info') {
            const embed = new MessageEmbed()
            .setColor("#2f3136")
        .setDescription(`[My prefix is ${prefix}](https://excasy.pl/)`)
        .addField(`>>> ${emotes.rules}・Info`, "\n\`\`\` server, user, channel, role \`\`\`")
        await interaction.update({embeds: [embed]})
        }
        if (interaction.customId === 'bot') {
            const embed = new MessageEmbed()
            .setColor("#2f3136")
        .setDescription(`[My prefix is ${prefix}](https://excasy.pl/)`)
        .addField(`>>> ${emotes.sticker}・Bot`, "\n\`\`\` stats, help, invite, ping, shard \`\`\`")
        await interaction.update({embeds: [embed]})
        }
        if (interaction.customId === 'nsfw') {
            const embed = new MessageEmbed()
            .setColor("#2f3136")
        .setDescription(`[My prefix is ${prefix}](https://excasy.pl/)`)
        .addField(`>>> ${emotes.compass}・Nsfw`, "\`\`\` anal, ass, gif, pussy, hentai, boobs, solo, gonewild\ `\`\`")
        await interaction.update({embeds: [embed]})
        }
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
                .setDescription(`> Thank you for contacting our team ${interaction.user.username}.
                > We will try to answer as soon as possible!`)
                .setColor('#2f3136')
                .setTimestamp()
   
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
  