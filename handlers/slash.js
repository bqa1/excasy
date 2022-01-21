module.exports = (client) => {
    const fs = require("fs");
    const ascii = require("ascii-table");

    let slash = []


  
    const commandFolders = fs.readdirSync("./SlashCommands");
    for (const folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`./SlashCommands/${folder}`)
        .filter((file) => file.endsWith(".js"));
      for (const file of commandFiles) {
        const command = require(`../SlashCommands/${folder}/${file}`);
        if (command.name) {
          client.slash.set(command.name, command);
          slash.push(command)
          
        }
      }
    }
    client.on("ready", async() => {
      await client.application.commands.set(slash)
      console.log("[SLASH] loaded slash commands")
      
    })
  }