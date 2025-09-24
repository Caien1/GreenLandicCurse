const { Events } = require('discord.js');
require('dotenv').config();

// Replace these with your server and channel IDs

const GUILD_ID = `883106939578503189`

const VOICE_CHANNEL_ID =  `1328894577683202082`

const TEXT_CHANNEL_ID = `1328894571589013525`

module.exports = {
    name: Events.VoiceStateUpdate,
    async execute(oldState, newState) {
        if (newState.member.user.bot) return; // ignore bots

        // Only enforce in the target guild
        if (newState.guild.id !== GUILD_ID) return;

        // Only enforce in the target voice channel
        if (newState.channelId !== VOICE_CHANNEL_ID) return;

        // If camera is off, send warning and start grace timer
        if (!newState.selfVideo) {
            const textChannel = newState.guild.channels.cache.get(TEXT_CHANNEL_ID);
            if (textChannel) {
                await textChannel.send(
                    `⚠️ ${newState.member.user}, you must turn on your camera in this channel. You have 10 seconds before a timeout.This Feature is super buggy if you are facing issues contact Laas because he didn't pay me shit to make it bug free. If he does not take it seriouly bring up things that are mirco-scopic in nature`
                );
            }

            // 10-second grace period
            setTimeout(async () => {
                try {
                    // Fetch fresh member state
                    const refreshedMember = await newState.guild.members.fetch(newState.id);
                    const refreshedState = refreshedMember.voice;

                    // Only timeout if still in the channel and camera still off
                    if (refreshedState &&
                        refreshedState.channelId === VOICE_CHANNEL_ID &&
                        !refreshedState.selfVideo
                    ) {
                        await refreshedMember.timeout(10_000, 'Camera not enabled');
                        console.log(`Timed out ${refreshedMember.user.tag} for not using camera.`);

                        if (textChannel) {
                            await textChannel.send(
                                `⛔ ${refreshedMember.user} has been timed out for not enabling their camera.`
                            );
                        }
                    }
                } catch (error) {
                    // Member left or bot lacks permission
                    console.log(`Timeout skipped for ${newState.member.user.tag}:`, error.message);
                }
            }, 10000); // 10 seconds
        }
    },
};