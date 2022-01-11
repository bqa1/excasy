const statuses = {
    "online" : "🟢",
    "idle" : "🟠",
    "dnd" : "🔴",
    "offline" : "⚫️",
  }
const { MessageEmbed } = require("discord.js")
const moment = require("moment");
module.exports = {
    name: 'userinfo',
    aliases : ["ui", "whois", "ktotokurwa", "userinfo"],
    description: 'Informacje o kimś',
    run: async(client, message, args) => {

        const permissions = {
            "ini": "Brak",
           "ADMINISTRATOR": "Administrator",
            "MANAGE_GUILD": "Zarządzanie serwerem",
            "MANAGE_ROLES": "Zarządzanie rolami",
            "MANAGE_CHANNELS": "Zarządzanie kanałami",
            "KICK_MEMBERS": "Wyrzucanie",
            "BAN_MEMBERS": "Banowanie",
            "MANAGE_NICKNAMES": "Zarządzanie nickami",
            "MANAGE_EMOJIS": "Zarządzanie emoji",
            "MANAGE_WEBHOOKS": "Zarządzanie webookami",
            "MANAGE_MESSAGES": "Zarządzanie wiadomościami",
            "MENTION_EVERYONE": "oznaczanie @everyone"
        }
    
    
    
        const member = message.mentions.members.first() || client.users.cache.get(g => g.id.toLowerCase() === args[0]) || client.users.cache.get(g => g.username.toLowerCase() === args[0]) || client.users.cache.get("target")  || message.member 
    
    
        const mentionPermissions = member.permissions.toArray() === null ? "brak" : member.permissions.toArray();
        const finalPermissions = [];
        for (const permission in permissions) {
            if (mentionPermissions.includes(permission)) finalPermissions.push(`${permissions[permission]}`);
            else;
        }
        const embed = new MessageEmbed()
        .setTitle(`Informacje o ${member.user.username}`)
        .setColor("#2f3136")
        .addField(`>>> Nazwa:`, `\`\`\`ini\n ${member.user.username}#${member.user.discriminator} \`\`\``)
        .addField(`>>> ID:`, `\`\`\`ini\n ${member.id} \`\`\``)
        .addField(`>>> Avatar:`, `[png](${member.user.displayAvatarURL({format: 'png'})}) | [webp](${member.user.displayAvatarURL({dynamic: true})}) | [jpg](${member.user.displayAvatarURL({format: 'jpg'})})`)
        .addField(`>>> Bot:`, `\`\`\`ini\n ${member.user.bot ? "Tak" : "Nie"} \`\`\``)
        .addField(`>>> Najwyższa rola :`, ` ${member.roles.highest ? `<@&${member.roles.highest.id}>` : "Brak"} `)
        .addField(`>>> Permisje`, `\`\`\`ini\n ${finalPermissions.join('\n') || "Brak"} \`\`\``)
        .addField(`>>> Dolączono`, `\`\`\`ini\n ${moment(member.joinedAt).format('LLLL')} \`\`\``)
        .addField(`>>> Stworzono`, `\`\`\`ini\n ${moment(member.user.createdAt).format('LLLL')}\`\`\``)
        .setFooter(message.author.tag, message.author.displayAvatarURL())
        message.reply({embeds: [embed]})
    



    }
}