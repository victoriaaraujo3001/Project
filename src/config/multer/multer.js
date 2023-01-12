const multer = require("multer");
const path = require("path");

module.exports = {
  destino: path.resolve(__dirname, "..", "..", "tmp", "uploads"),
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, path.resolve(__dirname, "..", "..", "tmp", "uploads"));
    },
    filename: (req, file, callback) => {
      const fileName = file.originalname;
      callback(null, fileName);
    },
  }),
  limits: {
    fileSize: 3 * 1024 * 1024,
    //3 megabytes
  },
  fileFilter: (req, file, callback) => {
    //formatação aceitas na imagem
    const allowedImages = ["image/jpeg", "image/png", "image/gif", "image/jpg"];
    if (allowedImages.includes(file.mimetype)) {
      callback(null, true);
    } else {
        callback(new Error("Invalid type file/image"))
    }
  },
};
