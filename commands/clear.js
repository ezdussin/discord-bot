let dft = '*syntax: w!clear amount: number{1-50}*';

module.exports = {
    name: 'clear',
    description: 'clear messages from the channel the command was inputted',
    async execute(msg, args){
        if(!args[0]) return msg.reply(`enter the amount of messages you want to clear. ${dft}`);
        if(isNaN(args[0])) return msg.reply(`enter a real number. ${dft}`);
        if(args[0] > 50) return msg.reply(`you cannot delete more than 50 messages. ${dft}`);
        if(args[0] < 1) return msg.reply(`you must delete at least 1 message. ${dft}`);

        await msg.channel.messages.fetch({limit: args[0]}).then(msgs => {
            msg.channel.bulkDelete(msgs);
        });
    }
}