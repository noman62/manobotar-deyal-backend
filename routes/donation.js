import express from 'express'
const router = express.Router()

// middleware
// import { requireSignin } from '../middlewares'

// controllers
import {
 newDonation,
 allDonation,
 read,
 specificDonation,
 updateStatus,
} from '../controllers/donation'

// Routes


router.post('/donation',newDonation)
router.get('/donations', allDonation)
router.get('/user-donation',specificDonation)
router.get('/donation/:donationId', read)
router.put('/update/:id', updateStatus)





module.exports = router