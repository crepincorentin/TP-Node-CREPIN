const axios = require('axios');
const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('createuser')
        .setDescription('Create user')
        .addStringOption(option =>
            option.setName('name')
                .setDescription('Le nom de l\'utilisateur.')
                .setRequired(true))
    ,
    async execute(interaction) {
        const userData = {
            name: interaction.options.getString('name')
        }
        const resp = await axios.post('http://localhost:3000/create', userData);
        await interaction.reply(`L'utilisateur a été créé avec succès!`);
    },
};


