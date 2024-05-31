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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_38_05_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMixcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMzksXG4gICAgICAgIDkxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQxLFxuICAgICAgICA0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDgyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDksXG4gICAgICAgIDQzLFxuICAgICAgICA2MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjExLFxuICAgICAgICAyMjksXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDU3LFxuICAgICAgICA2MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDc1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyLFxuICAgICAgICA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICA2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICA0NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDk2LFxuICAgICAgICA3NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDczLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNixcbiAgICAgICAgNzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgsXG4gICAgICAgIDMxLFxuICAgICAgICAwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjIzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTExLFxuICAgICAgICA2MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA5MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDczLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgODAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNCxcbiAgICAgICAgMTU5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkRqbTFpYk1SVGdZZVVSWDlCNm5iQ3pCL1NaWVl2VllzSkt5NFhzNjdIY1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlZzaHFKZUpmVGwtLVIxa1VWSU5jOWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODUyMjk2YWEtMDc3OS00MmVmLWIxYzQtZWJmNTM1ZWE1NzViXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg1LFxuICAgICAgNDIsXG4gICAgICAxNTQsXG4gICAgICAzNixcbiAgICAgIDg0LFxuICAgICAgOTQsXG4gICAgICAxNDAsXG4gICAgICA3MCxcbiAgICAgIDE4NyxcbiAgICAgIDEyMCxcbiAgICAgIDIzMixcbiAgICAgIDE1MixcbiAgICAgIDYyLFxuICAgICAgMTE5LFxuICAgICAgMjEsXG4gICAgICAyMzUsXG4gICAgICAxNDEsXG4gICAgICA5LFxuICAgICAgMTU3LFxuICAgICAgOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY0LFxuICAgICAgNTUsXG4gICAgICA1NixcbiAgICAgIDE3LFxuICAgICAgMTg5LFxuICAgICAgNixcbiAgICAgIDQ3LFxuICAgICAgMjUsXG4gICAgICAxODgsXG4gICAgICAxMDgsXG4gICAgICAxODUsXG4gICAgICAxMjIsXG4gICAgICAxMzEsXG4gICAgICAzOSxcbiAgICAgIDI1LFxuICAgICAgOTUsXG4gICAgICAyNDEsXG4gICAgICAxNDIsXG4gICAgICAxNDQsXG4gICAgICAxMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWlMzTktEQUFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzUzNTc0ODAzOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0NzA5ODc4NzkxNzg5NDo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tYLzlwa0RFTTNCNTdJR0dBZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiekdxNXl6UnBpcjl3L1hmcG8zaTVLTkxQbWlDdXEzdldVTHY3OFdDV0dIWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJaaWRPVEZ1ZW1HcC9ZaXpSUm9DWUhBTzV6WkJNbnFOMi9ETUU3akh3TGlSN3pLY3p2MmJXb09ndkRqOWNFZVR6OHBLNE9aMVBRM0w2Z2o1NXVxM2FBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJORGhYdGFoSkhWckdFSk5DTTNTanF2NUZGcm9CVVFVS3hkbXlFOUhBa0dvTE1vRjZ2MFYxdnJ2bS9MZ0l4NzRWNkJDejVTY2cvR1dvSStnVzRzRjFndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc1MzU3NDgwMzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3MTY2Mjg4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS2J1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLYnUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJldUxWSlZBbkMyaUxSNnIyd1l1WHVhSGlYekhtQ3c3QkJVYkJZUjZFUCtVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg1OTY4NDc3MyxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTcwODQwMTQ5NTZcIn0iCn0="  // PUT your SESSION_ID 


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
