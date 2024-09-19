const {SlashCommandBuilder} = require('discord.js')
//const { execute } = require('../utility/user')
const { MessageActionRow, MessageButton } = require('discord.js');
const { Pagination } = require('pagination.djs');
const { EmbedBuilder } = require('discord.js');

const PAGE_SIZE=7;
module.exports = {

    data: new SlashCommandBuilder()
        .setName('deals')
        .setDescription('Lists games on sale')
        .addStringOption(option =>
            option.setName('maxprice')
            .setDescription('Only returns deals with a price less than or equal to this value (50 acts the same as no limit)')
            .setRequired(true) 
        ),

        async execute(interaction) {
            const pagination = new Pagination(interaction);
           const maxPrice = interaction.options.getString('maxprice')
         //  const startindex = interaction.options.getString('startindex')
            const url = `https://www.cheapshark.com/api/1.0/deals?upperPrice=${maxPrice}`

            async function getDeals(url) {

                try{

                const response = await fetch(url)
                let data = await response.json()

               // console.log(data.length);
                return data
                }
                catch(err){
                    console.log(err);
                }             
            }

           let data =await  getDeals(url);

          console.log(data[0])
           if(data.length==0){

            await interaction.reply(`No such offer`);

           }


           
            
            
            const embeds = data.map(function(deal){
                return {name:`**Title:** ${deal.title}\n`,value:`*Price*:$${deal.salePrice}\n\n`}
            })
           // console.log(embeds)
        
            pagination.setTitle('Games on sale');
            
            // for (let i = 0; i <= 5; i++) {
            //     const newEmbed = new EmbedBuilder().setTitle(`Embed ${i + 1}`);
            //     embeds.push(newEmbed);
            // }
            // pagination.addFields([
            //     {
            //         name: 'First',
            //         value: 'First'
            //     },
            //     {
            //         name: 'Second',
            //         value: 'Second'
            //     },
            //     {
            //         name: 'Third',
            //         value: 'Third'
            //     }
            // ]);
        pagination.addFields(embeds);
        pagination.paginateFields(true);
            // or if you want to set a common change in all embeds, you can do it by adding a cb.
            // pagination.setEmbeds(embeds, (embed, index, array) => {
            //     return embed.setFooter({ text: `Page: ${index + 1}/${array.length}` })
            //     ;
            // });
            pagination.render();
        
   



           // Send the first page
           
          // await interaction.reply(`test`);
                 

                 





         
        },

}