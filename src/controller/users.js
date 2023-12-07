const UserModels = require('../models/users')

const getAllUsers = async (req, res) => {

    try {
        const [data] = await UserModels.getAllUsers();
    
        res.json({
            message: 'GET all users success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            ServerMessage: error,
        })
    }
    
}

const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const [user] = await UserModels.getUserById(id);

        if(!user) {
            return res.status(404).json({
                message: 'User tidak ditemukan',
                data: null
            })
        }

        res.json({
            message: 'GET user by ID success',
            data: user
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            ServerMessage: error,
        })
    }
}

const createNewUser = async (req, res) => {
    const {body} = req;

    try {
        await UserModels.createNewUser(body);
        res.status(200).json({
            message: 'CREATE new user success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            ServerMessage: error,
        })
    }
}
const updateUser = async (req, res) => {
    const {id} = req.params;
    const {body} = req;

    try {
        await UserModels.updateUser(body, id)
        res.status(200).json({
            message: 'UPDATE user success',
            data: {
                id: id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            ServerMessage: error,
        })
    }
}
const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        await UserModels.deleteUser(id);
        res.json({
            message: 'DELETE user success',
            data: null
        });
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            ServerMessage: error,
        });
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser
}