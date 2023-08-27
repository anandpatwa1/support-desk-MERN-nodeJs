const express = require('express')
const { getUser, registerUser, loginUser , getMe } = require('../controllers/userControllers')
const protect = require('../middlewere/authMiddlewere')
const router = express.Router()

router.get('/', getUser)
router.post('/', registerUser)
router.post('/login', loginUser)


router.post('/me', protect, getMe)


module.exports = router 