import express from 'express'
const router = express.Router()



// controllers
import {
  register,
  login,
  logout,
  allUser,

} from '../controllers/auth'

// Routes
router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)
router.get('/allUser', allUser)
module.exports = router
