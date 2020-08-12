const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Breadstick V2 is online!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const Discord = require("discord.js");
const bot = new Discord.Client();


//prefix
const PREFIX = "b!";

//things bot does once on
bot.on("ready", () => {
  console.log("Beep Boop, Breadstick The 2nd has activated!");
  bot.channels.cache.get("742849559864148119").setName('Breadstick Status: ONLINE');
});

//userinfo embed
bot.on("message", message => {
  let args = message.content.slice(PREFIX.length).split(" ");
  switch (args[0]) {
    case "userinfo":
      if (!message.mentions.members.first()) return
      const embed = new Discord.MessageEmbed()
        .setTitle("User Info")
        .addField("Discord username", message.mentions.users.first().username)
        .addField("Date Created", message.mentions.users.first().createdAt)
        .addField("Server Name", message.guild.name)
        .setThumbnail(message.mentions.users.first().displayAvatarURL());
      message.channel.send(embed);
      break;
  }
});

//ping command, pretty much hello world of bots
bot.on("message", message => {
  let args = message.content.slice(PREFIX.length).split(" ");
  switch (args[0]) {
    case "ping":
      message.channel.send("Pong!");
      break;
  }
});

//coinflip command
bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(' ');
    switch(args[0]){
        case 'coinflip':
            let coinfliprandom = Math.floor((Math.random() * 2) + 1);
            if (coinfliprandom === 2){
                message.channel.send("The coin says tails!");
            } else {
                if (coinfliprandom === 1){
                    message.channel.send("The coin says heads!");
                }  
            }
    }
})

bot.on;

bot.login(process.env.secret);
