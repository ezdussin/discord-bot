module.exports = {
    name: 'checkRole',
    description: 'check with you have certain role in the server',
    execute(msg, role){
        if(msg.member.roles.cache.some(r => r.name === role)){
            msg.reply('you have the permission');
        } if(msg.member.permissions.has('ADMINISTRATOR')){
            msg.reply('you have administrator permissions')
        }
    }
}