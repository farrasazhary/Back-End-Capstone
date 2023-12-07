const express = require('express');

const GaleryController = require('../controller/galery')
const upload = require('../middleware/galery')

const router = express.Router();

//CREATE - POST
router.post('/',upload.single('gambar_galery'), GaleryController.createNewGalery);

//READ - GET
router.get('/', GaleryController.getAllgalery);

//READ - GET ID
router.get('/:id', GaleryController.getGaleryById);

//UPDATE - PATCH
router.patch('/:id', upload.single('gambar_galery'), GaleryController.updateGalery);

//DELETE - DELETE
router.delete('/:id', GaleryController.deleteGalery);


module.exports = router;