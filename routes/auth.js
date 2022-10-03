import express from 'express'
const router = express.Router()

// middleware
import { requireSignin } from '../middlewares'

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
router.get('/allUser',requireSignin, allUser)
module.exports = router
