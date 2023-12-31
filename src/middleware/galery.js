const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/galery');
    },

    filename: (req, file, cb) => {
        const timestamp = new Date().getTime();
        const originalName = file.originalname;

        cb(null, `${timestamp}-${originalName}`)
    }
})

const upload = multer({storage: storage});

module.exports = upload;
