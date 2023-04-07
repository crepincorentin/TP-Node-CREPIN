const { SlashCommandBuilder } = require('discord.js')
const { request } = require('undici')

// Renvoi une image de chat
module.exports = {
    data: new SlashCommandBuilder()
        .setName('cat')
        .setDescription('Renvoi une image de chat'),
    async execute(interaction) {
        const { body } = await request('https://api.thecatapi.com/v1/images/search')
        const data = await body.json()
        await interaction.reply({ files: [data[0].url] })
    }
}





