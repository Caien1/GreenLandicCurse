const {SlashCommandBuilder} = require('discord.js')
//const { execute } = require('../utility/user')
const { MessageActionRow, MessageButton } = require('discord.js');

const PAGE_SIZE=7;
module.exports = {

    data: new SlashCommandBuilder()
        .setName('deals')
        .setDescription('Lists games on sale')
        .addStringOption(option =>
            option.setName('maxprice')
            .setDescription('Only returns deals with a price less than or equal to this value (50 acts the same as no limit)')
            .setRequired(true) 
        )
        .addStringOption(option =>
            option.setName('startindex')
            .setDescription('Navigate through listings')
            .setRequired(false))

            .addStringOption(option =>
                option.setName('endindex')
                .setDescription('Navigate through listings')
                .setRequired(false)),

        async execute(interaction) {

           const maxPrice = interaction.options.getString('maxprice')
           const startindex = interaction.options.getString('startindex')
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




            let min = Math.min(10,data.length)

            try{
            const message = data.slice(0,min).map(function(deal){

                return `**Title:** ${deal.title}\n`+`*Price*:$${deal.salePrice}\n\n`
              ;

            }).join("")
        
            await interaction.reply(`Total listing:${data.length}\n${message}`);}

            
            
            catch(err){
                await interaction.reply(`Some thing went wrong` + err);

            }
            finally{
        
            }
   



           // Send the first page
           
          // await interaction.reply(`test`);
                 

                 





         
        },

}