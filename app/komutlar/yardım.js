const Discord = require("discord.js");
const { MessageButton } = require('discord-buttons');
exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("Yardım Menüsü")
  .setDescription(`Bişiler Yazın`)
.setColor("RANDOM")
  let button = new MessageButton()
            .setLabel("♻️ Mesajı Sil ♻️")
            .setStyle("green")
            .setID("yardım")
        await message.channel.send('', {embed: embed, component: button})
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  }