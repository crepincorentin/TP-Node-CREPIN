
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Réponse : Nom de l\'utilisateur et date d\'arrivée sur le serveur!'),
    async execute(interaction) {
        await interaction.reply(`Nom de l'utilisateur: ${interaction.user.username}\nDate d'arrivée sur le serveur: ${interaction.member.joinedAt}`);
    }
}


