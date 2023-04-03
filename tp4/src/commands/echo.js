
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Réponse : Echo!')
        .addStringOption(option => option.setName('input').setDescription('Input de l\'utilisateur').setRequired(true)),
    async execute(interaction) {
        await interaction.reply(interaction.options.getString('input'));
    }
}






