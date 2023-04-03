// Fonction qui sort le nom du serveur et son nombre de membres

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Réponse : Nom du serveur et nombre de membres!'),
    async execute(interaction) {
        await interaction.reply(`Nom du serveur: ${interaction.guild.name}\nNombre de membres: ${interaction.guild.memberCount}`);
    }
}

