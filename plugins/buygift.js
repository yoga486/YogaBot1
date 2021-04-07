let handler = async m => m.reply(`
╭─「 BUY GIFT CODE 」
│ 
│ > Keterangan :
│• Fitur Gift adalah fitur kode yang berisi
│hadiah! Anda bisa mendapatkan exp & limit
│sepuasnya! Hingga masa berlaku kodegiftnya habis!
│
│ > Harga :
│• 1k / Minggu (7 Hari)
│• 4k / Bulan (4 Minggu)
│• 15k / VIP (Permanen)
│
│ > Pembayaran :
│• Gopay :
│0882009496234
│• Pulsa (SMART) :
│+62882009496234
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['buygift']
handler.tags = ['hadiah']
handler.command = /^(buygift)$/i

module.exports = handler
