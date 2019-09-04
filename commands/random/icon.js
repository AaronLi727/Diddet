const commando = require("discord.js-commando");

class IconCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "icon",
            group: "random",
            memberName: "icon",
            description: "Get User's Information"
        });
    }

    async run(message, args)
    {
       message.reply(message.author.avatarURL); //replys an img and link of the persons profile picture
    }
}
module.exports = IconCommand;
