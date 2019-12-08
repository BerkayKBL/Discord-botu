const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client));
  client.on('message', reqEvent('message'));
  client.on('guildMemberAdd', reqEvent('guildMemberAdd'));
  /*client.on('guildMemberRemove', reqEvent('guildMemberRemove'));
  client.on('guildMemberAdd', reqEvent('guildMemberAddsayac'));
  client.on('guildMemberRemove', reqEvent('guildMemberRemovesayac'));
  client.on('guildMemberAdd', reqEvent('guildMemberAddOtoRol'));*/
  //client.on('messageReactionAdd', reqEvent('messageReactionAdd'));
};