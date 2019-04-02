const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const embedyardim = new Discord.RichEmbed()
        .setTitle("HektarBot Discord Botumuzun Genel Komutlar�!**")
        .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFzFQwDYdhyceg4suNEiVoUwz0pNcsx9b9j6g5Sf-AKt1sZDg')
        .setDescription( `Ping: ${Date.now() - message.createdTimestamp} ms`)
        .setColor("#FF8C00")
        .setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
        .addField(ayarlar.prefix + "ban", "Ban atar!")
        .addField(ayarlar.prefix + "davet",  "Bulundu�unuz sunucunun davet linkini olu�turur.")
        .addField(ayarlar.prefix + "Yard�m",  "Yard�m Sayfas�n� a�ar!")
        .addField(ayarlar.prefix + "�zelduyuru",  "belirledi�iniz ki�iye mesaj atar")
        .addField(ayarlar.prefix + "otorolayarla",  "Sunucuya Girenlere Verilecek Olan Otorol� Ayarlar!")
        .addField(ayarlar.prefix + "otorols�f�rla", "Otorol Ba�ar�yla S�f�rlar!")
		.addField(ayarlar.prefix + "otorolmesajkapat",  "Otorol Mesajlar� Ba�ar�yla Kapat�r!")
		.addField(ayarlar.prefix + "durum",  "Kullan�c� Durumlar�n� g�sterir!")
		.addField(ayarlar.prefix + "ping",  "Botun Pingini G�sterir")
		.addField(ayarlar.prefix + "sil",  "Belirlenen miktarda mesaj� siler")
		.addField(ayarlar.prefix + "mute",  "�stedi�iniz ki�iyi  susturur")
		.addField(ayarlar.prefix + "mcbody",  "Belirtilen oyuncunun kost�m�n� g�sterir")
		.addField(ayarlar.prefix + "kilit",  "Kanal� istedi�iniz kadar s�reyle kitler")
		.addField(ayarlar.prefix + "duyuru",  "G�zel Bir Duyuru G�r�n�m� Sa�lar")
		.addField(ayarlar.prefix + "giri�-��k��-ayarla",  "Giri� ��k�� kanal�n� ayarlar")
		.addField(ayarlar.prefix + "giri�-mesaj-ayarla",  "Giri� mesaj�n� de�i�tirmenizi sa�lar.")
    
        message.react("??")
    if (!params[0]) {
        const commandNames = Array.from(client.commands.keys());
        const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
        message.channel.send(embedyardim);
    } else {
        let command = params[0];
        if (client.commands.has(command)) {
            command = client.commands.get(command);
            message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDo�ru kullan�m: ` + prefix + `${command.help.usage}`);
        }
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['h', 'halp', 'help', 'y',"y1"],
    permLevel: 0
};

exports.help = {
    name: 'yard�m',
    description: 'T�m komutlar� g�sterir.',
    usage: 'yard�m [komut]'
};