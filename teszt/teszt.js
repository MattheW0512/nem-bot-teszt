const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = ">";
let messageArray = message.content.split(" ");
let cmd = messageArray[0]
let args = messageArray.slice(1)

client.on('message', message => {
    if (message.content === `${prefix}ko`) {

        textChannelID = message.channel;
        randomszam = (Math.random() * 6) + 1
        let kocka = Math.round(randomszam)

        //Üzenet
        textChannelID.send("A dobott szám nem más, mint: " + kocka + "!")

    }
})