const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hi')
		.setDescription('An introduction'),
	async execute(interaction) {
		await interaction.reply('I am a bot with infinite potential');
	},
};
