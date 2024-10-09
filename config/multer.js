import multer from "multer";
import path from "path"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/admin/assets/ProductImages');
    },
    filename: function (req, file, cb) {
      if (!file) {
        return cb(new Error('File is missing.'));
      }
      if (!file.originalname) {
        return cb(new Error('File has no original name.'));
      }
      cb(
        null,
        file.fieldname + '_' + Date.now() + path.extname(file.originalname)
      );
    },
  });

  export const upload = multer({
    storage: storage,
  }).single('image');


  


