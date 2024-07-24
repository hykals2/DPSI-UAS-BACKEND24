const express = require('express');
const documentController = require('../controller/documentController'); // Mengimpor controller yang mengelola logika terkait dokumen
const auth = require('../middleware/auth'); // Mengimpor middleware untuk autentikasi dan otorisasi
const upload = require('../middleware/multer'); // Mengimpor middleware untuk menangani unggahan file
const router = new express.Router(); // Membuat instance router dari Express

// Route untuk mengunggah dokumen
// Endpoint ini hanya dapat diakses oleh pengguna dengan peran 'customer'
router.post('/documents', auth('customer'), upload.single('document'), documentController.uploadDocument);

// Route untuk mendapatkan semua dokumen
// Endpoint ini hanya dapat diakses oleh pengguna dengan peran 'employee' atau 'admin'
router.get('/documents', auth(['employee', 'admin']), documentController.getAllDocuments);

// Mengekspor router untuk digunakan di bagian lain aplikasi
module.exports = router;

/*
Route /documents (POST)
auth('customer'): Middleware ini memastikan bahwa hanya pengguna dengan peran 'customer' yang dapat mengakses endpoint ini. Jika peran pengguna tidak sesuai, akses akan ditolak.
upload.single('document'): Middleware ini menangani unggahan file, khususnya file yang dikirim dengan field name 'document'.
documentController.uploadDocument: Controller ini mengelola logika untuk memproses unggahan dokumen, seperti menyimpan file dan menyimpan metadata terkait dokumen.
*/

/*
Route /documents (GET):
auth(['employee', 'admin']): Middleware ini memastikan bahwa hanya pengguna dengan peran 'employee' atau 'admin' yang dapat mengakses endpoint ini. Pengguna dengan peran lain akan ditolak aksesnya.
documentController.getAllDocuments: Controller ini mengelola logika untuk mengambil semua dokumen dari penyimpanan dan mengembalikannya sebagai respons.
*/