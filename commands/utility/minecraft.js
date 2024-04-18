const { SlashCommandBuilder } = require('discord.js')
//import { spawn } from "child_process"
const { exec } = require('child_process');
const executablePath = '"C:/Program Files/Clone Hero/Clone Hero.exe"';
var fun =function(){
    console.log('fun()start');
    exec(executablePath, function(error, stdout, stderr ) {
        if (error){
        console.log(` ${error}`);
        return;
    }
        console.log(`stdoubt: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('minecraft')
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