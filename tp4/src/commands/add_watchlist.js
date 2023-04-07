const axios = require('axios');
const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('addwatchlist')
        .setDescription('Create watchlist')
        .addStringOption(option =>
            option.setName('name')
                .setDescription('Le nom de la watchlist.')
                .setRequired(true))
    ,
    async execute(interaction) {
        const watchlistData = {
            name: interaction.options.getString('name')
        }
        const resp = await axios.post('http://localhost:3000/watchlist', watchlistData);
        await interaction.reply('La watchlist a été créée avec succès!');
    },
};