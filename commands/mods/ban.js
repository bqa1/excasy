
const Discord = require("discord.js");
const Permissions = require("discord.js")

module.exports = {
    name: "ban",
    aliases : ["banned"],
    description: "ban someone <a:ban:922405494440730655>",
    category: "mod",
    run: async(client, message, args) => {
    
        if (!message.member.permissions.has(Discord.Permissions.FLAGS.BAN_MEMBERS))  {
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
            .setDescription("You dont have \`BAN_MEMBERS\` permissions")
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [perm] });
        
    }
    
    if(!message.guild.me.permissions.has(Discord.Permissions.FLAGS.BAN_MEMBERS))  {
        const perm = new Discord.MessageEmbed()
        .setTitle("Something went wrong")
        .setColor("#2f3136")
        .setDescription("I dont have \`BAN_MEMBERS\` permissions")
        .setFooter(message.author.tag, message.author.displayAvatarURL())
        return message.reply({embeds: [perm] });
    
    }
        const target = message.mentions.members.first()
    if(!target) {
      
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
            .setDescription("Mention someone!\nVaild usage: \`[p]ban @someone read rules\`")
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [perm] });
    }
    if(target.id === message.author.id) {
    

            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
            .setDescription("you cant ban yourself")
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [perm] });
    }

    if(!target.bannable) {
      
        const perm = new Discord.MessageEmbed()
        .setTitle("Something went wrong")
        .setColor("#2f3136")
        .setDescription(`I cant ban ${target}`)
        .setFooter(message.author.tag, message.author.displayAvatarURL())
        return message.reply({embeds: [perm] });
    } else {

        let reason = args.slice(1).join(" ");
        if (!reason) {
            pow = `Not provied- ${message.author.username}#${message.author.discriminator}`;
        } else {
            pow = `${reason} - ${message.author.username}#${message.author.discriminator}`
        }

        const sukces = new Discord.MessageEmbed()
            .setTitle("MOD SYSTEM | BAN")
            .setColor("#2f3136")
            .addField("Moderator", `${message.author}`)
            .addField("Banned", `${target}`)
            .addField("Reason", `${pow}`)
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            target.send({embeds: [sukces]}).catch(() => { "cannot send message to this user"})
        await target.ban({reason: pow}).then(() => message.reply({embeds: [sukces]}));
    }
    
    
}
}