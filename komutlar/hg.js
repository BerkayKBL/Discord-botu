const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
  let uye = message.mentions.users.first();
  if (!uye) return message.channel.send(':x: Kayıt edilecek üyeyi yazmadın.').then(m => m.delete(2000))
  if (args[1] === "erkek") {
    if (!args[2]) return message.channel.send(':x: Lütfen üyenin adını yazınız').then(m => m.delete(2000))
    if (args[3] < 0) return message.channel.send('Lütfen üyenin yaşını doğru yazınız').then(m => m.delete(200))
    message.guild.member(uye).addRole('645222866735988776')
    message.guild.member(uye).setNickname(`${args[2]} [ ${args[3]} ]`)
    message.guild.member(uye).removeRole('645275451203256320')
    message.channel.send(':white_check_mark: İsim değiştirildi, rol verildi').then(m => m.delete(2000))
    message.delete(2000)
  }
  else if (args[1] === "bayan" || "kız") {
    if (!args[2]) return message.channel.send(':x: Lütfen üyenin adını yazınız').then(m => m.delete(2000))
    if (args[3] < 0) return message.channel.send('Lütfen üyenin yaşını doğru yazınız').then(m => m.delete(200))
    message.guild.member(uye).addRole('645343804827631616')
    message.guild.member(uye).setNickname(`${args[2]} [ ${args[3]} ]`)
    message.guild.member(uye).removeRole('645275451203256320')
    message.channel.send(':white_check_mark: İsim değiştirildi, rol verildi').then(m => m.delete(2000))
    message.delete(2000)
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "ekstra"
};

exports.help = {
  name: "kayıt",
  description: "Üyeleri kayıt eder",
  usage: "kayıt"
};
