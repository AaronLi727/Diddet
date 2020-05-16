const commando = require("discord.js-commando");

class JoinCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "join",
            group: "voice",
            memberName: "join",
            description: "Summons Bot Into Voice Channel"
        });
    }

    async run(message, args)
    {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
                message.member.voiceChannel.join()
                    .then(connection =>{
                        message.reply("I'm Here!"); //will not send reply until the bot has joined the channel
                    }) 
            }
            else
            {
                message.reply("I'm Already Here!")
            }
        }
        else
        {
            message.reply("You Must Be Within A Voice Channel!");
        }
            
        
    }
}
module.exports = JoinCommand;
