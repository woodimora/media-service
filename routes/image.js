const express = require('express')
const router = express.Router()

const upload = require('../public/javascripts/utils/s3')
const uploadImages = require('../public/javascripts/controller/ImageContoller')

router.post("/images",
    upload.array('images',5),
    uploadImages
)

module.exports = router