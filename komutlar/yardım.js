const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce(
      (long, str) => Math.max(long, str.length),
      0
    );
    var helpembed = new Discord.RichEmbed()
      .setColor("#2c2f33")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(
        `**Bot Prefix**: \`${prefix}\`\n\n**Komut Bilgisi İçin** ${prefix}yardım [komut]\n\n**Aktif Komut Sayısı **》 ${
          client.commands.size
        }\n\n**Komutlar**\n${client.commands
          .map(
            c =>
              `${ayarlar.prefix}${c.help.name}${"".repeat(
                longest - c.help.name.lenght
              )} ►► ${c.help.description}`
          )
          .join("\n")} `
      );
    message.channel.sendEmbed(helpembed);
  } else if (params[0] === "ekstra") {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce(
      (long, str) => Math.max(long, str.length),
      0
    );
    var helpembed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(
        `**Bot Prefix**: \`${prefix}\`\n\n**Komut Bilgisi İçin** ${prefix}yardım [komut]\n\n**Komutlar**\n${client.commands
          .filter(cmd => exports.conf.kategori === "moderasyon")
          .map(cmd => " " + exports.help.name + " ")
          .join("\n")} `
      );
    message.channel.sendEmbed(helpembed);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      var help2embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription(
          `**Bot Prefix**: ${prefix}\n\n**Komut Bilgileri**\n_Komut Adı_ • ${command.help.name}\n_Komut Açıklaması_ • ${command.help.description}\n_Komut Kullanım_ • ${command.help.usage}\n_Diğer Komut Olanakları_ • ${command.conf.aliases}`
        );
      message.channel.sendEmbed(help2embed);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["h", "halp", "help", "y"],
  permLevel: 0,
  kategori: "ekstra"
};

exports.help = {
  name: "yardım",
  description: "Tüm Komutları Gösterir.",
  usage: "yardım [komut]"
};
