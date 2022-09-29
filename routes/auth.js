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
router.get('/allUser', allUser)
router.get('/logout', logout)
module.exports = router
