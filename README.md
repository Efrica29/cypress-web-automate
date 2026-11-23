# Cypress Web Automation: SauceDemo

End-to-end UI test automation untuk [saucedemo.com](https://www.saucedemo.com) menggunakan **Cypress**, dengan pola **Page Object Model** dan **fixtures**.

## Skenario yang diuji

| ID | Fitur | Skenario |
|---|---|---|
| TC01 | Login | Login berhasil dengan kredensial valid |
| TC02 | Login | Error saat password salah |
| TC03 | Login | Error saat username kosong |
| TC04 | Login | Error saat password kosong |
| TC05 | Login | Error saat user terkunci |
| TC06 | Keranjang | Tambah 1 produk ke keranjang |
| TC07 | Keranjang | Tambah 2 produk ke keranjang |
| TC08 | Keranjang | Hapus produk dari keranjang |
| TC09 | Checkout | Checkout berhasil dan unduh PDF order |
| TC10 | Checkout | Error saat First Name kosong |
| TC11 | Checkout | Error saat Last Name kosong |
| TC12 | Checkout | Error saat Postal Code kosong |

Total: **12 test case**.

## Teknologi

- Cypress 16
- JavaScript
- Page Object Model
- Fixtures (data tes terpisah dari script)
- Custom command (`cy.login`)

## Struktur proyek

cypress/
- e2e/ : file tes (login, cart, checkout)
- fixtures/ : data tes (users.json)
- pages/ : Page Object
- support/ : custom command dan konfigurasi global

## Cara menjalankan

Prasyarat: [Node.js](https://nodejs.org) (LTS).

    npm install
    npx cypress open
    npx cypress run

`cypress open` untuk mode interaktif, `cypress run` untuk mode headless.

## Hasil

Tambahkan screenshot hasil `npx cypress run` di sini.


## Catatan

Situs yang diuji adalah situs demo publik untuk latihan. Kredensial yang dipakai (`standard_user`, `secret_sauce`) memang disediakan oleh situs tersebut.