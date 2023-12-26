module.exports = {
    name: 'user',
    description: "embed user's info",
    execute(msg, Discord){
        const member = msg.mentions.members.first();
        let username;
        let image;
        let status;
        let color;
        if(member){
            username = member.user.username;
            image = member.user.avatarURL();
            status = member.user.presence.status;
        }else if(!member){
            username = msg.author.username;
            image = msg.author.avatarURL();
            console.log(msg.author)
        }
        const userEmbed = new Discord.MessageEmbed()
        .setColor('#FFFFFF')
        .setDescription('')
        .setImage(image)
        ;
        msg.reply({embeds: [userEmbed]})
    }
}