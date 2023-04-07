const axios = require('axios');
const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('listusers')
        .setDescription('Get user list'),
    async execute(interaction) {

        const resp = await axios.get('http://localhost:3000/create/findalluser');
        const cursor = resp.data;
        let result = "";
        await cursor.forEach((users) => {
            result += `**User:** ${users.name}\n`
            result += `**ID:** ${users._id}\n`
            result += `-----------------------------\n`
        })
        await interaction.reply(result);
    },
};

