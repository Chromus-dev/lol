const Discord = require('discord.js');
require('dotenv').config();
const fs = require('fs');
const client = new Discord.Client({ intents: Discord.Intents.ALL });
const keepAlive = require('./server');
const { responces: lols } = require('./config.json');
const db = require('quick.db');

client.on('message', async (message) => {
	if (message.author.bot) return;

	var found = false;
	lols.forEach((l) => {
		// console.log(!found ? true : false);
		if (!found) {
			// console.log(l);
			// console.log('im here');
			if (message.content.includes(l)) {
				// console.log('i found one!');
				let res = lols[Math.round(Math.random() * lols.length)];
				// console.log(res);
				message.channel.send(res);
				found = true;
			}
		}
	});
});

client.once('ready', () => {
	client.user.setActivity('lol by lmao', { type: 'LISTENING' }); // Activity

	console.log('lmao');
	console.log(`User: ${client.user.tag}`);
	console.log(`ID: ${client.user.id}`);
	console.log(`Servers: ${client.guilds.cache.size}`);
});

keepAlive();
client.login(process.env.TOKEN);
