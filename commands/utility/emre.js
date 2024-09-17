const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('emre')
		.setDescription('An introduction'),
	async execute(interaction) {
		await interaction.reply('Emre sucks at every game he plays' );
	},
};
