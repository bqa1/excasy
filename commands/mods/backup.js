const backup = require("discord-backup")
backup.setStorageFolder(__dirname + "/backups/")
       const Discord = require("discord.js")
   module.exports = {
    name: "backup",
    aliases : ["dodajrole", 'giverole'],
    description: "Give someone a special role ",
    category: "mod",
     usage: "addrole <rola> <użytkownik>",
    cooldown: 50,
    UserPerms: ["ADMINISTRATOR"],
    BotPerms: ["ADMINISTRATOR"],

    run: async(client, message, args) => {


        const actions = ["create", "load", "info", "delete"]

        if (!actions.includes(args[0])) {
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
            .setDescription("select `create/load/info/delete`!")
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [perm] });
        }

        if (args[0] === "create") {

            backup.create(message.guild, {

                jsonBeautify: true

            }).then(async backupdata => {

                const Embed = new Discord.MessageEmbed()
                .setColor("#2f3136")
                    .setTitle("Backup created Successful")
                    .setThumbnail(message.guild.iconURL({ dynamic: true }))
                    .setDescription(`Backup has successfully been create. Use \`backup load ${backupdata.id}\` to load the backup, or use \`backup delete ${backupdata.id}\` to delete the data.`)
                    .setTimestamp()

                message.reply({ embeds: [Embed] })

            })

        }

        if (args[0] === "load") {

            const backupID = args[1]

            if (!backupID) {
                const perm = new Discord.MessageEmbed()
                .setTitle("Something went wrong")
                .setColor("#2f3136")
                .setDescription("Please provide a backup ID!")
                .setFooter(message.author.tag, message.author.displayAvatarURL())
                return message.reply({embeds: [perm] });
            } 

            backup.fetch(backupID).then(async () => {

                backup.load(backupID, message.guild).then(() => {

                    clearGuildBeforeRestore: true,

                        backup.remove(backupID)

                })

            }).catch(err => {

                const perm = new Discord.MessageEmbed()
                .setTitle("Something went wrong")
                .setColor("#2f3136")
                .setDescription("No backup found!")
                .setFooter(message.author.tag, message.author.displayAvatarURL())
                return message.reply({embeds: [perm] });

            })

        }

        if (args[0] === "info") {

            const backupID = args[1]

            if (!backupID) {
                const perm = new Discord.MessageEmbed()
                .setTitle("Something went wrong")
                .setColor("#2f3136")
                .setDescription("Please provide a backup ID!")
                .setFooter(message.author.tag, message.author.displayAvatarURL())
                return message.reply({embeds: [perm] });
            }

            backup.fetch(backupID).then((backupInfos) => {

                const date = new Date(backupInfos.data.createdTimestamp)
                const yyyy = date.getFullYear().toString(), mm = (date.getMonth() + 1).toString(), dd = date.getDate().toString()
                const formatedDate = `${yyyy}/${(mm[1] ? mm : "0" + mm[0])}/${(dd[1] ? dd : "0" + dd[0])}`

                let embed = new Discord.MessageEmbed()
                    .setAuthor("Backup Informations")
                    .addField("Backup ID", backupInfos.id, false)
                    .addField("Server ID", backupInfos.data.guildID, false)
                    .addField("Size", `${backupInfos.size} kb`, false)
                    .addField("Created at", formatedDate, false)
                    .setColor("#2f3136")

                message.reply({ embeds: [embed] })

            }).catch((err) => {

                const perm = new Discord.MessageEmbed()
                .setTitle("Something went wrong")
                .setColor("#2f3136")
                .setDescription("No backup found!")
                .setFooter(message.author.tag, message.author.displayAvatarURL())
                return message.reply({embeds: [perm] });

            })

        }

        if (args[0] === "delete") {

            const backupID = args[1]

            if (!backupID) {
                const perm = new Discord.MessageEmbed()
                .setTitle("Something went wrong")
                .setColor("#2f3136")
                .setDescription("Please provide a backup ID!")
                .setFooter(message.author.tag, message.author.displayAvatarURL())
                return message.reply({embeds: [perm] });
            }

            backup.remove(backupID).then((backupInfos) => {
                const perm = new Discord.MessageEmbed()
                .setTitle("Success")
                .setColor("#2f3136")
                .setDescription("Deleted backup!")
                .setFooter(message.author.tag, message.author.displayAvatarURL())
                return message.reply({embeds: [perm] });

            }).catch((err) => {
                const perm = new Discord.MessageEmbed()
                .setTitle("Something went wrong")
                .setColor("#2f3136")
                .setDescription("No bakcup found!")
                .setFooter(message.author.tag, message.author.displayAvatarURL())
                return message.reply({embeds: [perm] });
            })

        }
    }
}