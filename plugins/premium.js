let handler = async m => m.reply(`
╭─「 BUY PREMIUM 」
│ 
│ > Keuntungan :
│• Limit Tidak Terbatas!
│• Fitur Premium Dapat Digunakan!
│• Dapat Menambahkan Bot Ke Grup!
│
│ > Bonus :
│• Diberikan Kode Gift Seminggu!
│
│ > Harga :
│• 10K / Bulan (4 Minguu)
│• 30K / Tahun (12 Bulan)
│• 50K / VIP (Permanen)
│
│ > Pembayaran :
│• GOPAY : +62882009496234
│•SMART : +62882009496234
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['premium']
handler.tags = ['premium']
handler.command = /^(premium)$/i

module.exports = handler
