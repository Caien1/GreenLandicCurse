const { Events } = require('discord.js');

module.exports = {
	name: Events.VoiceStateUpdate,
	async execute(oldState, newState) {
		// Ignore if the user is a bot
		if (newState.member.user.bot) return;

		// If user joins a channel or toggles video
		if (oldState.selfVideo !== newState.selfVideo) {
			if (!newState.selfVideo) {
				// Camera is OFF
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