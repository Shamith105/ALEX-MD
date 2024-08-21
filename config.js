const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_MSG: process.env.ALIVE_MSG,
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/d7e4a702a1b70a78c29ba.jpg",

};
