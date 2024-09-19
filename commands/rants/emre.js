const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('emre')
		.setDescription('Rant'),
	async execute(interaction) {
		await interaction.reply('🇹🇷 **Emre sucks at every game he plays 🇹🇷**\n*bitch ass you know what' );
	},
};
