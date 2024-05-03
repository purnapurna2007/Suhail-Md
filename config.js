const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "94789958225" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "94755902597";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "ftrue"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_00_05_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE4LFxuICAgICAgICA4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1LFxuICAgICAgICA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDM4LFxuICAgICAgICA2MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQxLFxuICAgICAgICA2NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAwLFxuICAgICAgICA4MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjksXG4gICAgICAgIDYzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA3NixcbiAgICAgICAgMTU2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODMsXG4gICAgICAgIDQxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICA5MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDczLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQyLFxuICAgICAgICA1OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU0LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEsXG4gICAgICAgIDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDksXG4gICAgICAgIDY1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDQxLFxuICAgICAgICA4OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTksXG4gICAgICAgIDk1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODAsXG4gICAgICAgIDc1LFxuICAgICAgICA5NixcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDY4LFxuICAgICAgICA1MSxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTk4LFxuICAgICAgICA2MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkZUUEhHY2UvRmZNU3NvYWlUSk1WQXlwY21hOGpYRU5YMGlBQXR1K1lyc0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3ODk5NTgyMjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY2RkYwNDFFNDM3QTM1NzcwOEYwRTZCNkVGMjJGMjM1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNDc2NjQxMVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLS2tCUDFCd1JicXBHVEk5VFNwZTNBXCIsXG4gIFwicGhvbmVJZFwiOiBcImI5NTAyNjYxLWU3ZTAtNGVhNy1iOGQxLWU5OWI4MjU5OGNkYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDEsXG4gICAgICAzNSxcbiAgICAgIDEzMyxcbiAgICAgIDk0LFxuICAgICAgNyxcbiAgICAgIDExMCxcbiAgICAgIDEwNixcbiAgICAgIDIyOCxcbiAgICAgIDE4OSxcbiAgICAgIDIyNyxcbiAgICAgIDc5LFxuICAgICAgMjA1LFxuICAgICAgMTkyLFxuICAgICAgNjYsXG4gICAgICAzMyxcbiAgICAgIDMsXG4gICAgICA5LFxuICAgICAgODksXG4gICAgICAxOSxcbiAgICAgIDU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY4LFxuICAgICAgNzgsXG4gICAgICAyMzAsXG4gICAgICAyNTMsXG4gICAgICAxNDcsXG4gICAgICAxNTgsXG4gICAgICAxOTgsXG4gICAgICAxNTAsXG4gICAgICA0OSxcbiAgICAgIDIyMCxcbiAgICAgIDE1LFxuICAgICAgMjI5LFxuICAgICAgOCxcbiAgICAgIDIzNCxcbiAgICAgIDgzLFxuICAgICAgMjQ3LFxuICAgICAgMjM1LFxuICAgICAgMzIsXG4gICAgICA1MSxcbiAgICAgIDIxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZUUFOS1hOVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3ODk5NTgyMjU6NjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJEzZ9FzZ9YzZ9UzZ9FzZ9SzZ9cIixcbiAgICBcImxpZFwiOiBcIjI2MTM0OTE3OTQxMjU4Mjo2MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNUEw3RWNReElUVnNRWVlBeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInBva011U2U3SHhRdTdJZmpCdHlyMkdBT0RXRG5yYmFVU0JoNWtnVWxaV3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ1hRbzc2TmZ1QndKY3FnY2JoSjRXNzNDYXV4SjYyM0FZdnZCamE2b2F3b3F4Yk1DNXhCYnllVCtJSHlSRFg0dW9TK1pLZVl6NjFPVmk0K0tCSEowQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL1RPMzRkVi82M0NreGM3UnZkQTFUZGNYY3lWWkgrSitxMkpjZFNSZHBoTjIxUGk1TzlUUGtrMjRqZnlpRUFQV0kvVjl0RSs1L3d1QmRDaFBRa2kwanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3ODk5NTgyMjU6NjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNDc2NjQwOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5aMlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTloyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ1VPNUNOM1Y2VUpYTmtHRjIzeDFjQ1NHeUZIdU9oQS9FUnpZeklBM3Z3OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTA2NzY5MzEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
