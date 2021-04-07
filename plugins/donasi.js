let handler = async m => m.reply(`
╭─「 DONATION 」
│• SMART [+62882009496234]
│• DANA [+62882009496234]
│• GOPAY [+62882009496234]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
