
const { SlashCommandBuilder } = require('discord.js')
const { request } = require('undici')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('urban')
        .setDescription('Renvoie une définition de votre terme.')
        .addStringOption(option => option.setName('input').setDescription('Input de l\'utilisateur').setRequired(true)),
    async execute(interaction) {
        const term = interaction.options.getString('input')
        const urban = await request(`https://api.urbandictionary.com/v0/define?term=${term}`)
        const { list } = await urban.body.json()
        const { definition } = list[0]
        await interaction.reply(definition)
    }
}
