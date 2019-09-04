const commando = require("discord.js-commando");

class SummonerCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "op.gg",
            group: "league",
            memberName: "op.gg",
            description: " Shows Summoners Profile On OP.GG"
        });
    }
    async run(message, args) {
    var space = args.split(" "); // allows spaces between letters or characters
    if(space.length == 1)
    {
      message.reply("https://na.op.gg/summoner/userName=" + space[0])
      
    }
    if(space.length == 2)
    {
      message.reply("https://na.op.gg/summoner/userName=" + space[0] + space[1])
      
    }
    if(space.length == 3)
    {
      message.reply("https://na.op.gg/summoner/userName=" + space[0] + space[1] + space[2])
    }
    if( space.length == 4)
    {
      message.reply("https://na.op.gg/summoner/userName=" + space[0] + space[1] + space[2] + space[3])
    }
    if(space.length == 5)
    {
      message.reply("https://na.op.gg/summoner/userName=" + space[0] + space[1] + space[2] + space[3] + space[4])
    }
    if( space.length == 6)
    {
      message.reply("https://na.op.gg/summoner/userName=" + space[0] + space[1] + space[2] + space[3] + space[4] + space[5])
    }
    if(space.length == 7)
    {
      message.reply("https://na.op.gg/summoner/userName=" + space[0] + space[1] + space[2] + space[3] + space[4] + space[5] + space[6])
    }
    if( space.length == 8)
    {
      message.reply("https://na.op.gg/summoner/userName=" + space[0] + space[1] + space[2] + space[3] + space[4] + space[5] + space[6] + space[7])
    }
    
  
 }
}
 module.exports = SummonerCommand;