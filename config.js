const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb://${{MONGO_INITDB_ROOT_USERNAME}}:${{MONGO_INITDB_ROOT_PASSWORD}}@${{RAILWAY_TCP_PROXY_DOMAIN}}:${{RAILWAY_TCP_PROXY_PORT}}"
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_31_05_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDUwLFxuICAgICAgICAxODksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk3LFxuICAgICAgICA4NixcbiAgICAgICAgNzEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTEzLFxuICAgICAgICA5MixcbiAgICAgICAgNixcbiAgICAgICAgMjI1LFxuICAgICAgICA2NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0LFxuICAgICAgICAzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzQsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNixcbiAgICAgICAgMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NixcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MixcbiAgICAgICAgMTM1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTksXG4gICAgICAgIDcwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTExLFxuICAgICAgICA5OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4NyxcbiAgICAgICAgNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5b29aeTh6YVlYZTZGMHc1VjE1aWM1OWhYZk5nMEdBa2swSUlEOWwxS3BnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJaSWxjMkJPalR3dXdERTlDNnVWbGZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQxMTBlNDc4LWNjM2EtNDQ4My04MjNkLWU1NGRkMWVkYjI1MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjUsXG4gICAgICAxMDUsXG4gICAgICAxNjMsXG4gICAgICAyMzAsXG4gICAgICA2LFxuICAgICAgMjI5LFxuICAgICAgMTQ0LFxuICAgICAgNzIsXG4gICAgICAxNjYsXG4gICAgICA0OCxcbiAgICAgIDE2NyxcbiAgICAgIDc0LFxuICAgICAgOTUsXG4gICAgICAzMyxcbiAgICAgIDgsXG4gICAgICAyMDcsXG4gICAgICAxODAsXG4gICAgICA5MCxcbiAgICAgIDIxLFxuICAgICAgMTg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ0LFxuICAgICAgMTYyLFxuICAgICAgMTE3LFxuICAgICAgMTM0LFxuICAgICAgMTQyLFxuICAgICAgODQsXG4gICAgICAyNDAsXG4gICAgICAxOTQsXG4gICAgICA1NyxcbiAgICAgIDIzLFxuICAgICAgMTMxLFxuICAgICAgMTgxLFxuICAgICAgNjUsXG4gICAgICAxMTAsXG4gICAgICAyNSxcbiAgICAgIDg4LFxuICAgICAgMjI3LFxuICAgICAgMTU5LFxuICAgICAgMjEwLFxuICAgICAgMTcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktEVE5WUFdGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc1NTkwMjU5Nzo1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTMzMzQyMDA3NjkzNTIzOjUyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkTNn0XNn1jNn1TNn0XNn1LNn1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0szTjVvb0ZFTWJvM3JFR0dBc2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZTZvcERIOXg0MzZhNjdnOWdsRHJsaHNFeUxYQTdjL0oxc1ZabXdTbDFrcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2QncwS2pjZkgyeEMzN3ZFOUlyNFFxSjgyL3V4YlcwVVFOSm1VZlI3NjdyQkIvZVVsRnBrSG8rVEN3YnphYjc0R0NvMHc5T0o5VVlYQ1J1dE1tdzdDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLZGJJMTNEOUlTbzRSYU5JeGNYQW9YMUVobnZFSEtMUGo3UE1qbHFUQnE3a2tJOUNxZXdOaXlSZ2Q1UmdnMW5tTnFaaS9Sd29qVmZrRVBwdWF0WGNCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc1NTkwMjU5Nzo1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTQ5MjY2NjVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
