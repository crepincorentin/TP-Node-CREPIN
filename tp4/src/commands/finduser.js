const { SlashCommandBuilder } = require('discord.js')
const { request } = require('axios')

module.exports = {
    data : new SlashCommandBuilder()
        .setName('finduser')
        .setDescription('Trouver un utilisateur'),
    async execute(interaction) {
        const body = await request('http://localhost:3000/create/findone/noa')

        const data = body.data
        await interaction.reply(JSON.stringify(data))
    }
}

