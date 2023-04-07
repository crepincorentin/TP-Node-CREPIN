const axios = require('axios');
const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('additem')
        .setDescription('Create item')
        .addStringOption(option =>
            option.setName('name')
                .setDescription('Le nom de l\'item.')
                .setRequired(true))
    ,
    async execute(interaction) {
        const itemData = {
            name: interaction.options.getString('name')
        }
        const resp = await axios.post('http://localhost:3000/add', itemData);
        await interaction.reply('L\'item a été créé avec succès!');
    },
};

