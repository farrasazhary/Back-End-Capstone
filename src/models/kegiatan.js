const pool = require('../config/database')

const getAllKegiatan = () => {
    const SQLQuery = 'SELECT * FROM kegiatan';
    return pool.execute(SQLQuery);
}

const getKegiatanById = (id) => {
    const SQLQuery = `SELECT * FROM kegiatan WHERE id=${id}`;
    return pool.execute(SQLQuery);
};

const createNewKegiatan = (body, filename) => {
    const SQLQuery = `  INSERT INTO kegiatan (judul_kegiatan, tanggal_kegiatan, alamat_kegiatan, deskripsi_kegiatan, waktu_kegiatan, gambar_kegiatan) 
                        VALUES ('${body.judul_kegiatan}', '${body.tanggal_kegiatan}', '${body.alamat_kegiatan}', '${body.deskripsi_kegiatan}', '${body.waktu_kegiatan}', '${filename}')`

    return pool.execute(SQLQuery);
}

const updateKegiatan = (body, id, filename) => {
    const SQLQuery = `  UPDATE kegiatan
                        SET judul_kegiatan='${body.judul_kegiatan}', tanggal_kegiatan='${body.tanggal_kegiatan}', alamat_kegiatan='${body.alamat_kegiatan}', deskripsi_kegiatan='${body.deskripsi_kegiatan}', waktu_kegiatan='${body.waktu_kegiatan}', gambar_kegiatan='${filename}'
                        WHERE id=${id}`

    return pool.execute(SQLQuery);
}

// Perbarui menjadi:
const deleteKegiatan = async (id) => {
    const [result] = await pool.execute(`DELETE FROM kegiatan WHERE id=${id}`);
    const affectedRows = result.affectedRows;

    if (affectedRows === 0) {
        throw new Error(`Kegiatan with id ${id} not found`);
    }

    return result;
};


module.exports = {
    getAllKegiatan,
    getKegiatanById,
    createNewKegiatan,
    updateKegiatan,
    deleteKegiatan
}