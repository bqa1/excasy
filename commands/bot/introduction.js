const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')

module.exports = {
    name: 'introduction',
    ownerOnly: true,
    run: async(client, message,args) => {
            message.delete()
        const embed = new MessageEmbed()
        .setAuthor('beginnings with a bot', `${client.user.displayAvatarURL()}`)
        .setColor('#2f3136')
        .setDescription('> You have a whole list of commands under `.help`, so if you forgot something, you can use it.')
        .addField('<:excasyred:922506870948790303> Technical Settings', `The default prefix is \`.\`, So if it suits you, you don't need to change it.
        > • \`.prefix <prefix>\` - setting a new prefix\n
        > • \`.modlogs <#channel>\` - setting the channel for logs
        > • \`.ticket-panel <contents>\` - setting a ticket
        > • \`.muterole <@role>\` - setting the role to mute`)
        .addField(`<:excasyorange:922506871074603008> Antilinks`, 
        `
        > • \`.antyinvite <on/off>\` - setting to block invitations
        > • \`.antylink <on/off>\` - setting to block links`)
        
        .setTimestamp()
        .setFooter(`${message.guild.name}`, `${message.guild.iconURL({ dynamic: true })}`)
        const row = new MessageActionRow()
        .addComponents(
    new MessageButton()
    .setURL("https://discord.com/api/oauth2/authorize?client_id=757308157855793232&permissions=8&redirect_uri=https%3A%2F%2Fexcasy.pl%2F&response_type=code&scope=identify%20bot")
    .setLabel('Invite bot')
    .setStyle('LINK'),
            new MessageButton()
                .setURL("https://excasy.pl/")
                .setLabel('Site')
                .setStyle('LINK'),
                new MessageButton()
                .setURL("https://excasy.pl/support")
                .setLabel('Support server')
                .setStyle('LINK'),
        );
        message.channel.send({embeds: [embed], components: [row]})
    }
}