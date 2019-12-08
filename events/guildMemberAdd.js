const Discord = require('discord.js');

module.exports = async(member) => {
  member.guild.channels.get('645202980827561994').send(`Sunucumuza hoş geldin ${member}. Kayıt olmak için, isim+yaş söyleyiniz.\n\nİsmine 𝕳 ekleyerek <@&646450067032637440> rolüne sahip olabilir, alımlarda daha önde olabilirsin. Seninle birlikte \`${member.guild.memberCount}\` kişi olduk.`)
}