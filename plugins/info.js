let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭─「 INFO BOT 」
│
│> Bot Recoded By :
│• PNHR009
│
│> Bot Dibuat Dengan :
│• JavaScript via NodeJS
│• FFmpeg
│
│> Thanks To :
│• Nurutomo
│• Drawl Nag
│
│> Donasi :
│• SMART [+62882009496234]
│• DANA [+62882009496234]
│• GOPAY [+62882009496234]
╰────
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
