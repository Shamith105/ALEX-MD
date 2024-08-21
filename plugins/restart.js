const config = require('../config')
const { cmd , commands } = require('../command')
const {sleep} = require('../lib/functions')
cmd({
    pattern: "restart", 
    desc: "CYBER-MD restart bot..✅",
    category: "owner",  
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isOwner) return reply("*This Owner Command*");
const {exec} = require("child_process")
reply("CYBER-MD restarting..👨‍💻✅")
await sleep(1500)
exec("pm2 restart all")
}catch(e){
console.log(e)
reply(`${e}`)
}
})
