module.exports = {
    name: 'send',
    description: 'make the bot send any message you want',
    execute(msg, args){
        args.forEach(arg => {
            msg.channel.send(arg);
        });
    }
}