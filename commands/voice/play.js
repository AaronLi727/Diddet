/*const commando = require("discord.js-commando");
const ytdl = require("ytdl-core");


class PlayCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "play",
            group: "voice",
            memberName: "play",
            description: "Plays Music In The Voice Channel"
        });
    }

    async run(message, args) // args is the whole url link while args[0] is "h" in "http" and args[1] is t and etc...
    {
        

        if(!args)
        {
            return message.channel.send("Please Input A URL");
        }
        
        let validate = await ytdl.validateURL(args);
        
        if(!validate)
        {
            return message.channel.send("Try Again, Not Valid URL");
        }

        let info = await ytdl.getInfo(args);
        let connection = await message.member.voiceChannel.join();
        let dispatcher = await connection.playStream(ytdl(args, {filter:"audioonly",quality: 'highestaudio', highWaterMark: 1<<25 }), {highWaterMark: 1});
        //let dispatcher = queue.connection.playStream(ytdl(music.url,{filter: 'audioonly',
        // quality: 'highestaudio', highWaterMark: 1<<25 }), {highWaterMark: 1})
        message.channel.send(`Now Playing: ${info.title}`);
    }
}
module.exports = PlayCommand;
*/