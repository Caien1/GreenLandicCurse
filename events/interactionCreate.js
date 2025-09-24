const { Events } = require('discord.js');

// Replace these with your server and channel IDs
const GUILD_ID = '1270520185392201791';
const CHANNEL_ID = '1328894577683202082';

module.exports = {
	name: Events.VoiceStateUpdate,
	async execute(oldState, newState) {
		// Ignore bots
		if (newState.member.user.bot) return;

		// Only enforce in the target guild + channel
		if (
			newState.guild.id !== GUILD_ID ||
			newState.channelId !== CHANNEL_ID
		) {
			return;
		}

		// Check if video was toggled
		if (oldState.selfVideo !== newState.selfVideo) {
			if (!newState.selfVideo) {
				try {
					// Timeout for 1 minute (60_000 ms)
					await newState.member.timeout(60_000, 'Camera not enabled');
					console.log(`Timed out ${newState.member.user.tag} for not using camera.`);
				} catch (error) {
					console.error(`Failed to timeout ${newState.member.user.tag}:`, error);
				}
			}
		}
	},
};
