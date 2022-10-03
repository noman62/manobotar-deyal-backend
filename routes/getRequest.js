import express from 'express'
const router = express.Router()

// middleware
// import { requireSignin } from '../middlewares'

// controllers
import {
newRequest,
allRequest,
adminRequest
} from '../controllers/getRequest'

// Routes


router.post('/request',newRequest)
router.get('/requests', allRequest)
router.get('/allrequest', adminRequest)
// router.get('/donation/:donationId', read)





module.exports = router