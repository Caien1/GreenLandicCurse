const { createAudioPlayer, createAudioResource, joinVoiceChannel } = require('@discordjs/voice');
const { SlashCommandBuilder } = require('discord.js');

const ytStream = require('yt-stream');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Plays a song from YouTube')
        .addStringOption(option =>
            option.setName('url')
                .setDescription('The YouTube URL of the song')
                .setRequired(true)
        ),

    async execute(interaction) {
        const url = interaction.options.getString('url');

        // Check if the user is in a voice channel
        const voiceChannel = interaction.member.voice.channel;
        if (!voiceChannel) {
            return interaction.reply('You need to be in a voice channel to play music!');
        }

        // Join the voice channel
        const connection = joinVoiceChannel({
            channelId: voiceChannel.id,
            guildId: interaction.guild.id,
            adapterCreator: interaction.guild.voiceAdapterCreator,
        });

        if(connection){
            return interaction.reply(`You joined ${voiceChannel.id}`)
        }
        else{
            return interaction.reply(`Failed!!`)
        }

        
    },
};