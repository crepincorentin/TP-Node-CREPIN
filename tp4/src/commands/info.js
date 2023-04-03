
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Réponse : Nom de l\'utilisateur et date d\'arrivée sur le serveur!')
        .addSubcommand(subcommand => subcommand
            .setName('user')
            .setDescription('Réponse : Nom de l\'utilisateur et date d\'arrivée sur le serveur!')
            .addStringOption(option => option
                .setName('input')
                .setDescription('Input de l\'utilisateur')))
        .addSubcommand(subcommand => subcommand
            .setName('server')
            .setDescription('Réponse : Nom du serveur et nombre de membres!')),
    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();
        if (subcommand === 'user') {
            const user = interaction.options.getString('input');
            if (user) {
                await interaction.reply(`Nom de l'utilisateur: ${user}\nDate d'arrivée sur le serveur: ${interaction.member.joinedAt}`);
            } else {
                await interaction.reply(`Nom de l'utilisateur: ${interaction.user.username}\nDate d'arrivée sur le serveur: ${interaction.member.joinedAt}`);
            }
        } else if (subcommand === 'server') {
            await interaction.reply(`Nom du serveur: ${interaction.guild.name}\nNombre de membres: ${interaction.guild.memberCount}`);
        }
    }
}

