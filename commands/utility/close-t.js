const { SlashCommandBuilder } = require('discord.js')
const { exec }  = require('child_process')
const command = 'taskkill /F /IM \"Terraria_start.ps1\" /T'
var fun2 = function(){
    console.log('fun2()start');
   exec( command  , (error, stdout, stderr) => {
    if(error){
    console.error(`Error executing PowerShell script: ${error}`);
    return;
    }
    if(stderr){
        console.error(`${stderr}`)
        return;
    }
    console.log(`PowerShell script output: ${stdout}`);
   });
}

module.exports = {
    data: new SlashCommandBuilder()
    .setName('closet')
    .setDescription('CLoses terraria Server'),
    async execute(interaction){
        await interaction.reply('Closing Game')
        .then(fun2())
        .catch(error => {
            console.log(error)
        })
        await interaction.followUp('Game Closed')
    }

}