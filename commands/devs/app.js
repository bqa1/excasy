const Discord = require("discord.js");
const moment = require("moment");
const emoji = require("../../emotes.json")
const fetch = require("node-fetch")
const { token } = require("../../config.js")
module.exports = {
    name: "ap",
    ownerOnly: true,
    aliases : ["e"],
    description: "-",
    category: "dev",
    usage: "brak",
    run: async(client, message, args) => {

         await fetch(`https://canary.discord.com/api/v9/applications/870401551619981322`, {
             method: "GET",
            headers: {
              Authorization: `Bot ${token}`
            },
          })
          .then((res) => {
            const { name } = res.data;

            message.reply(`${name}`)
      
            
  
              
          })

    }}
