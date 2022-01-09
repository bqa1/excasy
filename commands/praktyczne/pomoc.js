// Zaimportowanie kilku zmiennych oraz embedów
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { readdirSync } = require("fs");
const emotes = require('../../emotes.json')

module.exports = {
  name: 'pomoc',
  aliases: ['help'],
  description: 'komendy bota',
  run: async(client, msg, args) => {
// Pokazywanie komend 
const data = [];
const { commands } = msg.client;

// Emotki kategorii
let dirEmojis = {
zabawne: `${emotes.sticker}`,
praktyczne: `${emotes.integration}`,
config: `${emotes.settings}`,
}
// Stworzenie znmiennej argumentów oraz kategorii               
if(!args[0]) {
let categories = [];
  
// Obserwuj każdy folder oraz ukryj roższerzenie ".js"        
readdirSync("./commands/").forEach((dir) => {
let dir_name = `${dirEmojis[dir]} ・ ${dir.charAt(0).toUpperCase() + dir.slice(1)}`
const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
file.endsWith(".js")
);
  
// Stwórz komendy          
const cmds = commands.map((command) => {
let file = require(`../../commands/${dir}/${command}`);
  
// Jeśli plik nie ma komendy nie poazuj go
if (!file.name) return "`brak nazwy!`"
  
// Wycinaj roższeżenie "js"
let name = file.name.replace(".js", "");
  
// Zwracaj nazwe komendy
return `\`${name}\``;
});
  
// Stwórz nowy obiekt
let data = new Object();
  
// Dodaj fieldy
data = {
    name: dir_name,
    value: cmds.length === 0 ? "`Już wkrótce...`" : cmds.join(", "),
      };
  
// Pokazuj fieldy
categories.push(data);
        });

// Stworzenie nowego embeda z komendami bota
const embed = new MessageEmbed()
.setAuthor(`System pomocy bota ${client.user.username}!`, `${msg.author.displayAvatarURL({dynamic: true})}`)
.addFields(categories)
.setColor('#2f3136')
.setTimestamp()
.setFooter(`${msg.author.tag}`,
msg.author.displayAvatarURL({ dynamic: true }))

return msg.reply({embeds: [embed] })
}
  }
}