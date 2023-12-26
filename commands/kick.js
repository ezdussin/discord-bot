module.exports = {
    name: 'kick',
    descripton: 'kick the mentioned member',
    execute(msg){
        const member = msg.mentions.users.first();
        if(!msg.member.permissions.has('KICK_MEMBERS')){
            msg.reply('you dont have permission to kick someone')
        }else if(member){
            const memberTarger = msg.guild.members.cache.get(member.id);
            memberTarger.kick();
            msg.reply(`the user ${member} has been kicked`);
        }else if(!member){
            msg.reply("the user you mentioned doesn't exist");
        }
    }
}