const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "rDohzDwZ#SuY1S_VhsewbDy9HgStneVOtr6o7kdG7JgezgAKbi9E",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/87e7ae0d50a3fa8f1ff4e.jpg",
ALIVE_MSG: process.env.ALIVE_MSG ||"*ʜᴇʏ  ɪ   ᴀᴍ   ᴄʏʙᴇʀ-ᴍᴅ-ʙᴏᴛ👋*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public"
};
