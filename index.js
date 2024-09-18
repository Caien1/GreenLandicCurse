require('dotenv').config()
const fs = require('node:fs');
const path = require('node:path');
const { Client, GatewayIntentBits,Collection } = require('discord.js');


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
 // res.sendFile('index.html', { root: path.join(__dirname, '../html') });
})



app.get('/test', (req, res) => {
	res.send('OK 200')
   // res.sendFile('index.html', { root: path.join(__dirname, '../html') });
  })

  app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
  })
// Create a new client instance
const client = new Client({ intents: [ GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildVoiceStates, // Required for voice channels
	GatewayIntentBits.GuildMessages] });
client.commands = new Collection();


//load all commands in clients.commands
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);
for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}


//load events
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

// Log in to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);