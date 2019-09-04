const commando = require("discord.js-commando");

class LeaveCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "leave",
            group: "voice",
            memberName: "leave",
            description: "Kicks Bot Out Of Voice Channel"
        });
    }

    async run(message, args)
    {
        if(message.guild.voiceConnection)
        {
            message.guild.voiceConnection.disconnect();
            
        }
        else
        {
            message.reply("I Must Be Within A Voice Channel To Get Banished!");
        }
            
        
    }
}
module.exports = LeaveCommand;
