const pool = require('../config/database')

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';

    return pool.execute(SQLQuery);
}


const createNewUser = (body) => {
    const SQLQuery = `  INSERT INTO users (name, handphone, email, password) 
                        VALUES ('${body.name}', '${body.handphone}', '${body.email}', '${body.password}')`

    return pool.execute(SQLQuery);
}

const updateUser = (body, id) => {
    const SQLQuery = `  UPDATE users
                        SET name='${body.name}', handphone='${body.handphone}', email='${body.email}', password='${body.password}'
                        WHERE id=${id}`

    return pool.execute(SQLQuery);
}

const deleteUser = async (id) => {
    const [result] = await pool.execute(`DELETE FROM users WHERE id=${id}`);
    const affectedRows = result.affectedRows;

    if (affectedRows === 0) {
        throw new Error(`User with id ${id} not found`);
    }

    return result;
};

module.exports = {
    createNewUser,
    getAllUsers,
    updateUser,
    deleteUser
}