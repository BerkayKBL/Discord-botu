const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async(client, message, args) => {
  if (args[0] === "kapat") {
    if (!message.channel.name.startsWith(`diger- || tasarim- || mimari- || skript- || discordb- || webscript- || eklentip-`))//|| mimari- || skript- || discordb- || webscript- || eklentip-`)) return message.channel.send(':x: Destek kanalında yaz')
      message.channel.send('Talep kapanıyor!')
      setTimeout(() => {
        message.channel.delete()
      }, 5000)
    return;
  }
  const destek = new Discord.RichEmbed()
  .setColor('BLUE')
  .setTitle('Hizmetler')
  .addField('**1. Deneme**', 'xxxx')
  .addField('****2. Deneme****', 'xxxx')
  .addField('****3. Deneme****', 'xxxx')
  .addField('****4. Deneme****', 'xxxx')
  .addField('****5. Deneme****', 'xxxx')
  .addField('****6. Deneme****', 'xxxx')
  message.channel.send(destek).then(async msg => {
    msg.react('🇩').then(async r => {
      await msg.react('648895755742085150')
      await msg.react('🇪')
      await msg.react('🇲')
      await msg.react('🇸')
      await msg.react('🇼')
      await msg.react('❌')
      
      const eklentiPaketi = (reaction, user) => reaction.emoji.name === '🇪' && user.id === message.author.id;
      const discordBot = (reaction, user) => reaction.emoji.name === '🇩' && user.id === message.author.id;
      const tasarim = (reaction, user) => reaction.emoji.id === '648895755742085150' && user.id === message.author.id;
      const mimari = (reaction, user) => reaction.emoji.name === '🇲' && user.id === message.author.id;
      const webScript = (reaction, user) => reaction.emoji.name === '🇼' && user.id === message.author.id;
      const skript = (reaction, user) => reaction.emoji.name === '🇸' && user.id === message.author.id;
      const diger = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

      const eklentiP = msg.createReactionCollector(eklentiPaketi);
      const discordB = msg.createReactionCollector(discordBot);
      const tasarim2 = msg.createReactionCollector(tasarim);
      const mimari2 = msg.createReactionCollector(mimari);
      const skript2 = msg.createReactionCollector(skript);
      const webS = msg.createReactionCollector(webScript);
      const diger2 = msg.createReactionCollector(diger);


      eklentiP.on('collect', r => {
        message.author.send(`SSSSS
SSSSS
SSSSSS
SSSSS
SSSSSS`)
        message.delete()
        msg.delete()
        const kategori = message.guild.channels.find('name', '🔊 | Siparişler')
        if (kategori) {
          const kanalvar = message.guild.channels.find('name', `eklentip-${message.author.id}`);
          if (kanalvar) return message.author.send(':x: Bu kategori için destek kanalınız zaten bulunmaktadır.')
          message.guild.createChannel(`eklentip-${message.author.id}`, 'text').then(async c => {
            let everyone = message.guild.roles.find('name', '@everyone');
            let eklentiPE = message.guild.roles.find('name', 'Eklenti Paketi');
            c.overwritePermissions(everyone, {
              VIEW_CHANNEL: false,
              SEND_MESSAGES: false,
              READ_MESSAGES: false,
            })
            c.overwritePermissions(eklentiPE, {
              VIEW_CHANNEL: true,
              SEND_MESSAGES: true,
              READ_MESSAGES: true,
            })
            c.overwritePermissions(message.author, {
              VIEW_CHANNEL: true, 
              SEND_MESSAGES: true, 
              READ_MESSAGES: true
            })
            c.setParent(kategori.id)
            const kanalmesaj = new Discord.RichEmbed ()
            .setTitle('Yeni Sipariş Var')
            .setDescription(`${message.author} sipariş talebiniz oluşturuldu!\n\nÖncelikle Hopeless hizmetini tercih ettiğiniz için teşekkürler. Bir yetkili sizinle ilgilenene\nkadar sabırla beklemenizi rica ediyoruz! Yetkililer sizinle en kısa süre içerisinde ilgilenecektir.`)
            .setColor('PURPLE')
            await c.send(kanalmesaj)
            await c.send('@here')
          })
        }
      })
      discordB.on('collect', r => {
        message.author.send(`SSSSS
SSSSS
SSSSSS
SSSSS
SSSSSS`)
        message.delete()
        msg.delete()
        const kategori = message.guild.channels.find('name', '🔊 | Siparişler')
        if (kategori) {
          const kanalvar = message.guild.channels.find('name', `discordb-${message.author.id}`);
          if (kanalvar) return message.author.send(':x: Bu kategori için destek kanalınız zaten bulunmaktadır.')
          message.guild.createChannel(`discordb-${message.author.id}`, 'text').then(async c => {
            let everyone = message.guild.roles.find('name', '@everyone');
            let discordBE = message.guild.roles.find('name', 'Discord Bot');
            c.overwritePermissions(everyone, {
              VIEW_CHANNEL: false,
              SEND_MESSAGES: false,
              READ_MESSAGES: false,
            })
            c.overwritePermissions(discordBE, {
              VIEW_CHANNEL: true,
              SEND_MESSAGES: true,
              READ_MESSAGES: true,
            })
            c.overwritePermissions(message.author, {
              VIEW_CHANNEL: true, 
              SEND_MESSAGES: true, 
              READ_MESSAGES: true
            })
            c.setParent(kategori.id)
            const kanalmesaj = new Discord.RichEmbed ()
            .setTitle('Yeni Sipariş Var')
            .setDescription(`${message.author} sipariş talebiniz oluşturuldu!\n\nÖncelikle Hopeless hizmetini tercih ettiğiniz için teşekkürler. Bir yetkili sizinle ilgilenene\nkadar sabırla beklemenizi rica ediyoruz! Yetkililer sizinle en kısa süre içerisinde ilgilenecektir.`)
            .setColor('PURPLE')
            await c.send(kanalmesaj)
            await c.send('@here')
          })
        }
      })
      mimari2.on('collect', r => {
        message.author.send(`SSSSS
SSSSS
SSSSSS
SSSSS
SSSSSS`)
        message.delete()
        msg.delete()
        const kategori = message.guild.channels.find('name', '🔊 | Siparişler')
        if (kategori) {
          const kanalvar = message.guild.channels.find('name', `mimari-${message.author.id}`);
          if (kanalvar) return message.author.send(':x: Bu kategori için destek kanalınız zaten bulunmaktadır.')
          message.guild.createChannel(`mimari-${message.author.id}`, 'text').then(async c => {
            let everyone = message.guild.roles.find('name', '@everyone');
            let mimariE = message.guild.roles.find('name', 'Mimari');
            c.overwritePermissions(everyone, {
              VIEW_CHANNEL: false,
              SEND_MESSAGES: false,
              READ_MESSAGES: false,
            })
            c.overwritePermissions(mimariE, {
              VIEW_CHANNEL: true,
              SEND_MESSAGES: true,
              READ_MESSAGES: true,
            })
            c.overwritePermissions(message.author, {
              VIEW_CHANNEL: true, 
              SEND_MESSAGES: true, 
              READ_MESSAGES: true
            })
            c.setParent(kategori.id)
            const kanalmesaj = new Discord.RichEmbed ()
            .setTitle('Yeni Sipariş Var')
            .setDescription(`${message.author} sipariş talebiniz oluşturuldu!\n\nÖncelikle Hopeless hizmetini tercih ettiğiniz için teşekkürler. Bir yetkili sizinle ilgilenene\nkadar sabırla beklemenizi rica ediyoruz! Yetkililer sizinle en kısa süre içerisinde ilgilenecektir.`)
            .setColor('PURPLE')
            await c.send(kanalmesaj)
            await c.send('@here')
          })
        }
      })
      tasarim2.on('collect', r => {
        message.author.send(`SSSSS
SSSSS
SSSSSS
SSSSS
SSSSSS`)
        message.delete()
        msg.delete()
        const kategori = message.guild.channels.find('name', '🔊 | Siparişler')
        if (kategori) {
          const kanalvar = message.guild.channels.find('name', `tasarim-${message.author.id}`);
          if (kanalvar) return message.author.send(':x: Bu kategori için destek kanalınız zaten bulunmaktadır.')
          message.guild.createChannel(`tasarim-${message.author.id}`, 'text').then(async c => {
            let everyone = message.guild.roles.find('name', '@everyone');
            let tasarimE = message.guild.roles.find('name', 'Tasarım');
            c.overwritePermissions(everyone, {
              VIEW_CHANNEL: false,
              SEND_MESSAGES: false,
              READ_MESSAGES: false,
            })
            c.overwritePermissions(tasarimE, {
              VIEW_CHANNEL: true,
              SEND_MESSAGES: true,
              READ_MESSAGES: true,
            })
            c.overwritePermissions(message.author, {
              VIEW_CHANNEL: true, 
              SEND_MESSAGES: true, 
              READ_MESSAGES: true
            })
            c.setParent(kategori.id)
            const kanalmesaj = new Discord.RichEmbed ()
            .setTitle('Yeni Sipariş Var')
            .setDescription(`${message.author} sipariş talebiniz oluşturuldu!\n\nÖncelikle Hopeless hizmetini tercih ettiğiniz için teşekkürler. Bir yetkili sizinle ilgilenene\nkadar sabırla beklemenizi rica ediyoruz! Yetkililer sizinle en kısa süre içerisinde ilgilenecektir.`)
            .setColor('PURPLE')
            await c.send(kanalmesaj)
            await c.send('@here')
          })
        }
      })
      webS.on('collect', r => {
        message.author.send(`SSSSS
SSSSS
SSSSSS
SSSSS
SSSSSS`)
        message.delete()
        msg.delete()
        const kategori = message.guild.channels.find('name', '🔊 | Siparişler')
        if (kategori) {
          const kanalvar = message.guild.channels.find('name', `webscript-${message.author.id}`);
          if (kanalvar) return message.author.send(':x: Bu kategori için destek kanalınız zaten bulunmaktadır.')
          message.guild.createChannel(`webscript-${message.author.id}`, 'text').then(async c => {
            let everyone = message.guild.roles.find('name', '@everyone');
            let webSE = message.guild.roles.find('name', 'Web Script');
            c.overwritePermissions(everyone, {
              VIEW_CHANNEL: false,
              SEND_MESSAGES: false,
              READ_MESSAGES: false,
            })
            c.overwritePermissions(webSE, {
              VIEW_CHANNEL: true,
              SEND_MESSAGES: true,
              READ_MESSAGES: true,
            })
            c.overwritePermissions(message.author, {
              VIEW_CHANNEL: true, 
              SEND_MESSAGES: true, 
              READ_MESSAGES: true
            })
            c.setParent(kategori.id)
            const kanalmesaj = new Discord.RichEmbed ()
            .setTitle('Yeni Sipariş Var')
            .setDescription(`${message.author} sipariş talebiniz oluşturuldu!\n\nÖncelikle Hopeless hizmetini tercih ettiğiniz için teşekkürler. Bir yetkili sizinle ilgilenene\nkadar sabırla beklemenizi rica ediyoruz! Yetkililer sizinle en kısa süre içerisinde ilgilenecektir.`)
            .setColor('PURPLE')
            await c.send(kanalmesaj)
            await c.send('@here')
          })
        }
      })
      skript2.on('collect', r => {
        message.author.send(`SSSSS
SSSSS
SSSSSS
SSSSS
SSSSSS`)
        message.delete()
        msg.delete()
        const kategori = message.guild.channels.find('name', '🔊 | Siparişler')
        if (kategori) {
          const kanalvar = message.guild.channels.find('name', `skript-${message.author.id}`);
          if (kanalvar) return message.author.send(':x: Bu kategori için destek kanalınız zaten bulunmaktadır.')
          message.guild.createChannel(`skript-${message.author.id}`, 'text').then(async c => {
            let everyone = message.guild.roles.find('name', '@everyone');
            let skriptE = message.guild.roles.find('name', 'Skript');
            c.overwritePermissions(everyone, {
              VIEW_CHANNEL: false,
              SEND_MESSAGES: false,
              READ_MESSAGES: false,
            })
            c.overwritePermissions(skriptE, {
              VIEW_CHANNEL: true,
              SEND_MESSAGES: true,
              READ_MESSAGES: true,
            })
            c.overwritePermissions(message.author, {
              VIEW_CHANNEL: true, 
              SEND_MESSAGES: true, 
              READ_MESSAGES: true
            })
            c.setParent(kategori.id)
            const kanalmesaj = new Discord.RichEmbed ()
            .setTitle('Yeni Sipariş Var')
            .setDescription(`${message.author} sipariş talebiniz oluşturuldu!\n\nÖncelikle Hopeless hizmetini tercih ettiğiniz için teşekkürler. Bir yetkili sizinle ilgilenene\nkadar sabırla beklemenizi rica ediyoruz! Yetkililer sizinle en kısa süre içerisinde ilgilenecektir.`)
            .setColor('PURPLE')
            await c.send(kanalmesaj)
            await c.send('@here')
          })
        }
      })
      diger2.on('collect', r => {
        message.author.send(`SSSSS
SSSSS
SSSSSS
SSSSS
SSSSSS`)
        message.delete()
        msg.delete()
        const kategori = message.guild.channels.find('name', '🔊 | Siparişler')
        if (kategori) {
          const kanalvar = message.guild.channels.find('name', `diger-${message.author.id}`);
          if (kanalvar) return message.author.send(':x: Bu kategori için destek kanalınız zaten bulunmaktadır.')
          message.guild.createChannel(`diger-${message.author.id}`, 'text').then(async c => {
            let everyone = message.guild.roles.find('name', '@everyone');
            let digerE = message.guild.roles.find('name', 'Hepsi');
            c.overwritePermissions(everyone, {
              VIEW_CHANNEL: false,
              SEND_MESSAGES: false,
              READ_MESSAGES: false,
            })
            c.overwritePermissions(digerE, {
              VIEW_CHANNEL: true,
              SEND_MESSAGES: true,
              READ_MESSAGES: true,
            })
            c.overwritePermissions(message.author, {
              VIEW_CHANNEL: true, 
              SEND_MESSAGES: true, 
              READ_MESSAGES: true
            })
            c.setParent(kategori.id)
            const kanalmesaj = new Discord.RichEmbed ()
            .setTitle('Yeni Sipariş Var')
            .setDescription(`${message.author} sipariş talebiniz oluşturuldu!\n\nÖncelikle Hopeless hizmetini tercih ettiğiniz için teşekkürler. Bir yetkili sizinle ilgilenene\nkadar sabırla beklemenizi rica ediyoruz! Yetkililer sizinle en kısa süre içerisinde ilgilenecektir.`)
            .setColor('PURPLE')
            await c.send(kanalmesaj)
            await c.send('@here')
          })
        }
      })
    })
  })
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'destek',
  description: 'Destek talebi açarsınız.',
  usage: 'destek'
};