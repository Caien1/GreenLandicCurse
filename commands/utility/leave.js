const { SlashCommandBuilder } = require('discord.js');
const { getVoiceConnection } = require('@discordjs/voice');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leave')
        .setDescription('Disconnects the bot from the voice channel.'),

    async execute(interaction) {
        // Check if the bot is in a voice channel
        const voiceConnection = getVoiceConnection(interaction.guild.id);
        
        if (voiceConnection) {
            // Destroy the voice connection
            voiceConnection.destroy();
            await interaction.reply('Disconnected from the voice channel!');
        } else {
            await interaction.reply('I am not connected to any voice channel!');
        }
    },
};