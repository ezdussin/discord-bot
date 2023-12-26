module.exports = {
    name: 'createEmbed',
    description: 'display a embed message according to your input',
    execute(msg, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00000f')
        .setTitle('Help')
        .setURL('https://www.google.com/')
        .setDescription('description')
        .addFields(
            {name: 'f1', value: 'field1', inline: true},
            {name: 'f2', value: 'field2', inline: true},
            {name: 'f3', value: 'field3', inline: true}
        )
        .setImage('https://i.pinimg.com/originals/6b/20/3e/6b203e8b1c88bae65c7ac78b17492379.jpg')
        .setFooter('footer');

        msg.reply({ embeds: [newEmbed] });
    }
}