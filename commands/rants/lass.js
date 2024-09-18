const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lass')
		.setDescription('realtalk'),
	async execute(interaction) {
		await interaction.reply(`**Laas** is a remarkable individual whose personality is as dynamic as his many names, such as **The Alphagay, Malding Clown, More Like Loss, and Schizophrenic Rambler**. Known for his unwavering determination and resilience, Laas approaches every challenge with steadfast resolve. He is incredibly intelligent, often displaying a sharp wit and a keen sense of humor that can lighten even the most serious situations. Laas is compassionate and empathetic, always ready to lend a helping hand to those in need, making him a cherished friend and confidant.

Despite his fierce warrior spirit, Laas possesses a gentle side, showing patience and understanding in his interactions with others. He is so patient and understanding that, even after being harassed by the same person for months, he still tolerates their presence. He is also a natural leader, inspiring those around him to strive for greatness and continually improve themselves, except for the "Bæskubber," who remains too cocky and lost in his own mind to accept help. His humility and grace under pressure are admirable, making him a respected figure among his fellow peers in TFNE.

Underneath all this determination, Laas isn’t content to let his talent stay within a small community. He is working on a significant book, The Human Experience, which not only provides a great historical representation of the humans but also serves as a truth-teller, clarifying the humans wrongdoings and secrets. In which he reveals the truth of lots of human tradigis in great true details.Some would call this truth seeking schizophrenic Ramblings, others would call it a blessing.` );
	},
};
