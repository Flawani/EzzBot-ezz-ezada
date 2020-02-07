const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");

module.exports = {
    name: "get-panel",
    category: "moderation",
    description: "Dostań panel beta bota",
    usage: "<id | wzmianka>",
    run: async (client, message, args) => {

        if (!message.member.hasPermission("MANAGE_GUILD")) {
            return message.reply("❌ Nie masz uprawnień do Panelu. Skontaktuj się z członkiem personelu")
                .then(m => m.delete(5000));
        
        } else {
            message.author.send(`Twój link do panelu : **http://localhost:5665/?token=675384794799931413** nie podawaj go nikomu!`)
        }

        
    }
}