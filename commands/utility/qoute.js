const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('qoute')
		.setDescription('Displays a random qoute'),
	async execute(interaction) {
		
      
        const api_url ="https://zenquotes.io/api/random/";
       
        async function getapi(url){
        const response = await fetch(url);
        let data = await response.json();
         return data;
        }

        let data = await getapi(api_url);
        console.log(data)
        if(data){
            await interaction.reply(`Qoute: **${data[0].q}** \n Author: *${data[0].a}*`);
        }
        else{
            await interaction.reply(`API busy!`);
        }

        
	},
};
