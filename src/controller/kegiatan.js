const KegiatanModels = require('../models/kegiatan')

const getAllKegiatan = async (req, res) => {

    try {
        const [data] = await KegiatanModels.getAllKegiatan();
    
        res.json({
            message: 'GET all kegiatan success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            ServerMessage: error,
        })
    }
    
}

const getKegiatanById = async (req, res) => {
    const { id } = req.params;

    try {
        const [kegiatan] = await KegiatanModels.getKegiatanById(id);

        if (!kegiatan) {
            return res.status(404).json({
                message: 'Kegiatan not found',
                data: null
            });
        }

        res.json({
            message: 'GET kegiatan by ID success',
            data: kegiatan
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            ServerMessage: error,
        });
    }
};


const createNewKegiatan = async (req, res) => {
    const {body} = req;
    const {filename} = req.file;

    try {
        await KegiatanModels.createNewKegiatan(body, filename)
        res.status(201).json({ 
            message: 'CREATE new kegiatan success',
            data: req.body,
            gambar_kegiatan: filename
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            ServerMessage: error,
        })
    }
}

const updateKegiatan = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    const {filename} = req.file;

    try {
       await KegiatanModels.updateKegiatan(body, id, filename);
       res.json({
           message: 'UPDATE kegiatan success',
           data: {
            id: id,
            ...body,
            gambar_kegiatan: filename
           }
       })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            ServerMessage: error,
        })
    }
}

const deleteKegiatan = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await KegiatanModels.deleteKegiatan(id);

        res.json({
            message: 'DELETE kegiatan success',
            data: {
                id: id,
                result: result
            }
        });
    } catch (error) {
        res.status(404).json({
            message: 'Kegiatan not found',
            ServerMessage: error.message,
        });
    }
};



module.exports = {
    getAllKegiatan,
    getKegiatanById,
    createNewKegiatan,
    updateKegiatan,
    deleteKegiatan
}