const express = require('express');

const KegiatanController = require('../controller/kegiatan')
const upload = require('../middleware/multer')

const router = express.Router();

//CREATE - POST
router.post('/',upload.single('gambar_kegiatan'), KegiatanController.createNewKegiatan);

//READ - GET
router.get('/', KegiatanController.getAllKegiatan);

//READ - GET ID
router.get('/:id', KegiatanController.getKegiatanById);

//UPDATE - PATCH
router.patch('/:id', upload.single('gambar_kegiatan'), KegiatanController.updateKegiatan);

//DELETE - DELETE
router.delete('/:id', KegiatanController.deleteKegiatan);


module.exports = router;