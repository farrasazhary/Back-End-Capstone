const GaleryModels = require('../models/galery')

const getAllgalery = async (req, res) => {
    try {
        const [data] = await GaleryModels.getAllgalery();
    
        res.json({
            message: 'GET all galery success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            ServerMessage: error,
        })
    }
}

const getGaleryById = async (req, res) => {
    const { id } = req.params;

    try {
        const [galery] = await GaleryModels.getGaleryById(id);

        if (!galery) {
            return res.status(404).json({
                message: 'Galery not found',
                data: null
            });
        }

        res.json({
            message: 'GET galery by ID success',
            data: galery
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            ServerMessage: error,
        });
    }
}

const createNewGalery = async (req, res) => {
    const {body} = req;
    const {filename} = req.file;

    try {
        await GaleryModels.createNewGalery(body, filename)
        res.status(201).json({ 
            message: 'CREATE new kegiatan success',
            data: req.body,
            gambar_galery: filename
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            ServerMessage: error,
        })
    }
}

const updateGalery = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    const {filename} = req.file;

    try {
       await GaleryModels.updateGalery(body, id, filename);
       res.json({
           message: 'UPDATE galery success',
           data: {
            id: id,
            ...body,
            gambar_galery: filename
           }
       })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            ServerMessage: error,
        })
    }
}
const deleteGalery = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await GaleryModels.deleteGalery(id);

        res.json({
            message: 'DELETE galery success',
            data: {
                id: id,
                result: result
            }
        });
    } catch (error) {
        res.status(404).json({
            message: 'galery not found',
            ServerMessage: error.message,
        });
    }
}

module.exports = {
    getAllgalery,
    getGaleryById,
    createNewGalery,
    updateGalery,
    deleteGalery
}