const commando = require("discord.js-commando");

class CoinFlipCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "flip",
            group: "random",
            memberName: "flip",
            description: " Flips a coin, landing either on Heads or Tails"
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 2) //generates a random number between 0 and 1 then returns it
        {
            if(chance == 0)
            {
                message.reply("You Got Heads");
            }
            else
            {
                message.reply("You Got Tails");
            }
            
        }
    }
}
module.exports = CoinFlipCommand;
