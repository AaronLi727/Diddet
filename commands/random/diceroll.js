const commando = require("discord.js-commando");

class DiceRollCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "roll",
            group: "random",
            memberName: "roll",
            description: "Roll A Dice, Numbers One To Six"
        });
    }

    async run(message, args)
    {
        var diceRoll = Math.floor(Math.random() * 6) + 1; //generates a random number between 0 and 1 then returns it
        message.reply("Dice Number: " + diceRoll);
    }
}
module.exports = DiceRollCommand;
