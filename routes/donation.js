import express from 'express'
const router = express.Router()

// middleware
// import { requireSignin } from '../middlewares'

// controllers
import {
 newDonation,
 allDonation,
 read,
} from '../controllers/donation'

// Routes


router.post('/donation',newDonation)
router.get('/donations', allDonation)
router.get('/donation/:donationId', read)





module.exports = router