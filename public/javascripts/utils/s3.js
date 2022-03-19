const AWS = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3');
const { v4 } = require('uuid');
AWS.config.loadFromPath('awsconfig.json')
const s3 = new AWS.S3();

const upload = multer({
    storage: multerS3({
        s3:s3,
        bucket:'bean-image-bucket',
        acl: 'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: function(req, file, cb) {
            cb(null, 'images/' + v4() + '.' + file.originalname.split('.').pop()); 
        }
    }),
    limits: {
        fileSize: 1000 * 1000 * 10
    }
});

module.exports = upload;