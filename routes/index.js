const express = require('express')
const { v4 } = require('uuid')
const router = express.Router()

router.get("/",function (req, res) {
  res.json({
      messgae: v4()
  })
})

module.exports = router