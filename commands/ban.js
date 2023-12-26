module.exports = {
    name: 'ban',
    descripton: 'ban the mentioned member',
    execute(msg, args){
        const member = msg.mentions.members.first();
        args.shift();
        let reason = args.slice(0).join(' ');
        console.log(reason);
        if(!msg.member.permissions.has('BAN_MEMBERS')){
            msg.reply('you dont have permission to ban someone')
        }
        else if(member && !reason){
            msg.reply(`the user ${member} has been banned`);
        }
        else if(member && reason){
            const memberTarger = msg.guild.members.cache.get(member.id);
            memberTarger.ban({reason: reason});
            msg.reply(`the user ${member} has been banned for ${reason}`);
        }
        else if(!member){
            msg.reply("the user you mentioned doesn't exist");
        }
    }
}