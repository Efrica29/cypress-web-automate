const { defineConfig } = require("cypress");
const fs = require('fs')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      on('task', {
        //kosongkan folder download sebelum test
        clearDownloads(folder) {
          fs.rmSync(folder, { recursive: true, force: true })
          return null
        },

        //tunggu sampai ada file PDF (maks 10 detik), kembalikan namanya
        async waitForDownload(folder){
          const batas = Date.now() + 10000
          while (Date.now() < batas){
            if (fs.existsSync(folder)) {
              const pdf =   fs.readdirSync(folder).filter((n) => n.endsWith('.pdf'))
              if (pdf.length) return pdf[0]
            }
            await new Promise((r) => setTimeout(r, 500))
          }
          return null
        },
      })
    },
  },
});
