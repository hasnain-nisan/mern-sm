const fs = require('fs');

const fileValidate = (req, res, next) => {

    if (typeof req.file === "undefined" || typeof req.body === "undefined") {
        return res.status(400).json({
            message: "Problem in sending data",
        });
    }

    const image = req.file.path
    const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];

    if (!allowedFileTypes.includes(req.file.mimetype)) {
        //remove the uploaded file
        fs.unlinkSync(image)
        return res.status(400).json({
          message: "Unsoperted file type",
        });
    }

    //check if image is there
    !image &&
      res.status(400).json({
        message: "Must upload an image",
      });

    next();
}

module.exports = fileValidate