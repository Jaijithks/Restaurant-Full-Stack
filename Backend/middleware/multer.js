import multer from "multer";

const Storage = multer.diskStorage({
    filename: function(req, file , callback) {
        callback(null , file.originalname)
    }
})

const Upload = multer({Storage});

export default Upload; 