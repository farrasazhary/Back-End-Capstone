const pool = require('../config/database')

const getAllgalery = () => {
    const SQLQuery = 'SELECT * FROM galery';
    return pool.execute(SQLQuery);
}

const getGaleryById = (id) => {
    const SQLQuery = `SELECT * FROM galery WHERE id=${id}`;
    return pool.execute(SQLQuery);
}

const createNewGalery = (body, filename) => {
    const SQLQuery = `  INSERT INTO galery (judul, deskripsi, pencipta, tanggal_cipta, gambar_galery) 
                        VALUES ('${body.judul}', '${body.deskripsi}', '${body.pencipta}', '${body.tanggal_cipta}', '${filename}')`

    return pool.execute(SQLQuery);
}

const updateGalery = (body, id, filename) => {
    const SQLQuery = `  UPDATE galery
                        SET judul='${body.judul}', deskripsi='${body.deskripsi}', pencipta='${body.pencipta}', tanggal_cipta='${body.tanggal_cipta}', gambar_galery='${filename}'
                        WHERE id=${id}`

    return pool.execute(SQLQuery);
}

const deleteGalery = async () => {
    const [result] = await pool.execute(`DELETE FROM galery WHERE id=${id}`);
    const affectedRows = result.affectedRows;

    if (affectedRows === 0) {
        throw new Error(`Galery with id ${id} not found`);
    }

    return result;
}

module.exports = {
    getAllgalery,
    getGaleryById,
    createNewGalery,
    updateGalery,
    deleteGalery
}