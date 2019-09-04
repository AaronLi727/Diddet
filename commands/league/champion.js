const commando = require("discord.js-commando");

class ChampionCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "champ",
            group: "league",
            memberName: "champ",
            description: " Shows Champions Builds On OP.GG"
        });
    }
    async run(message, args) {
    var space = args.split(" "); // allows spaces between letters or characters
    if(space.length == 1)
    {
      message.reply("https://na.op.gg/champion/" + space[0] + "/statistics/")
      
    }
}
}
module.exports = ChampionCommand;