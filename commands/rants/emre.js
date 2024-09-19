const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('emre')
		.setDescription('Rant'),
	async execute(interaction) {
		await interaction.reply('🇹🇷 **Emre sucks at every game he plays 🇹🇷**\n\t*bitch ass you know what*',{ files: [
			{attachment: "https://tenor.com/view/turkish-man-gif-14733745593859528159", name: "image.jpg"},
			]} );
	},
};
