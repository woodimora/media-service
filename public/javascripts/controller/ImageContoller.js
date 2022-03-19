const uploadImages = (req, res, next) => {
    const url = req.files.map(({location})=>({location}))
    res.status(201).json({
        message: "Upload Image Success",
        imageUrl: url
    })
}

module.exports = uploadImages