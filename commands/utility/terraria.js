const { SlashCommandBuilder } = require('discord.js')
const { exec } = require('child_process');
const executablePath = '"C:/BotScripts/Terraria_start.ps1"';
var fun =function(){
    console.log('fun()start');
    exec(executablePath, function(error, stdout, stderr ) {
        if (error){
        console.log(`error: ${error}`);
        return;
    }
        console.log(`stdoubt: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('terraria')
        .setDescription('Launches Game Server'),
    async execute(interaction){
        await interaction.reply('Starting Server')
        .then(fun())
        .catch(error => {
            console.log(error)
        })
        await interaction.followUp('Server launched');

    },
};