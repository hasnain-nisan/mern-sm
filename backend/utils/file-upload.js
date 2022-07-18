const multer = require('multer')
const path = require('path')
const {v4 : uuidV4} = require('uuid')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'files')
    },
    filename: function (req, file, cb) {
        cb(null, uuidV4() + '-' + path.extname(file.originalname))
    }
})

const fileFilter = (req, file, cb) => {
    cb(null, true)
};

let upload = multer({
    storage,
    fileFilter
})

module.exports = upload.single('image')