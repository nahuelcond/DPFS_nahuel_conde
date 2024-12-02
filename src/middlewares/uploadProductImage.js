
const path = require('path');
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/img/imagenesJSON'))
    },
    filename: function (req, file, cb) {
      const ext = path.extname(file.originalname);
      const filename = Date.now() + ext;
      cb(null, filename)
    }
  })
  
  const upload = multer({ storage: storage });

  module.exports = upload;