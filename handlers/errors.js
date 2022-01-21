const Discord = require("discord.js");
module.exports = (client) => {

    const errChannel = "932693124185219082"

    process.on('unhandledRejection', (reason, p) => {

        console.log(" [Anti-crash] :: Unhandled Rejection/Catch")


        const errEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("⚠ New Error")
            .setDescription("An error just occured in the bot console!**\n\nERROR:\n\n** ```" + reason + "\n\n" + p + "```")
            .setTimestamp()
            .setFooter("Anti-Crash System")

         client.channels.cache.get(errChannel).send({ embeds: [errEmbed] })
         if(!errChannel) {
             console.log(reason)
         }

    })

    process.on('uncaughtException', (err, origin) => {

        console.log(" [Anti-crash] :: Uncaught Exception/Catch")

        const errEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("⚠ New Error")
            .setDescription("An error just occured in the bot console!**\n\nERROR:\n\n** ```" + err + "\n\n" + origin + "```")
            .setTimestamp()
            .setFooter("Anti-Crash System")

            client.channels.cache.get(errChannel).send({ embeds: [errEmbed] })

            if(!errChannel) {
                console.log(err)
            }

    })

    process.on('uncaughtExceptionMonitor', (err, origin) => {

        console.log(" [Anti-crash] :: Uncaught Exception/Catch (MONITOR)")


        const errEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("⚠ New Error")
            .setDescription("An error just occured in the bot console!**\n\nERROR:\n\n** ```" + err + "\n\n" + origin + "```")
            .setTimestamp()
            .setFooter("Anti-Crash System")

            client.channels.cache.get(errChannel).send({ embeds: [errEmbed] })
            
            if(!errChannel) {
                console.log(err)
            }

    })

    process.on('multipleResolves', (type, promise, reason) => {

        console.log(" [Anti-crash] :: Multiple Resolves")


        const errEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("⚠ New Error")
            .setDescription("An error just occured in the bot console!**\n\nERROR:\n\n** ```" + type + "\n\n" + promise + "\n\n" + reason + "```")
            .setTimestamp()
            .setFooter("Anti-Crash System")

          
         client.channels.cache.get(errChannel).send({ embeds: [errEmbed] })
         
         if(!errChannel) {
            console.log(reason)
        }

    }
    )
    }