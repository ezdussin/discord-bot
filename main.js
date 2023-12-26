const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });
const fs = require('fs');

const cPath = './commands/';
const token = 'Nzk3NjMyMjA5ODMzOTUxMjYy.X_pS4g.hLJtKEDltWf-OQoL8Nd8lwE7KjQ';
const prefix = 'w!';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync(cPath).filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const commands = require(cPath + file);

    client.commands.set(commands.name, commands)
}

client.once('ready', () => {
    console.log(`bot ${client.user.username} online...`);
});

client.on('message', msg => {
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;

    try{
        const args = msg.content.slice(prefix.length).split(/ +/);
        const cmd = args.shift().toLowerCase();

        if(cmd === 'ping') client.commands.get('ping').execute(msg, msg.createdTimestamp);
        if(cmd === 'checkrole') client.commands.get('checkRole').execute(msg);
        if(cmd === 'send') client.commands.get('send').execute(msg, args);
        if(cmd === 'clear') client.commands.get('clear').execute(msg, args);
        if(cmd === 'createembed') client.commands.get('createEmbed').execute(msg, Discord);
        if(cmd === 'ban') client.commands.get('ban').execute(msg, args);
        if(cmd === 'kick') client.commands.get('kick').execute(msg);
        if(cmd === 'user') client.commands.get('user').execute(msg, Discord);
    }
    catch(err) { console.log(err) }
})

client.login(token);
