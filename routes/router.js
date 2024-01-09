const express = require('express')
const router = express.Router();
const upload = require('../utilities/multer.js')

const{signUp} = require('../controllers/controller.js')

router.post('/sign-up', upload.array('photos', 5),signUp)


module.exports = router