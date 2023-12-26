module.exports = {
    name: 'ping',
    description: "returns your ping connection with discord's server",
    execute(msg, ping){
        msg.reply(`pong ${Date.now() - ping}ms`);
    }
}