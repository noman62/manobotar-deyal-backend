import mongoose from 'mongoose'
const { Schema } = mongoose
const { ObjectId } = Schema

const donationSchema = new Schema(
  {
    productName: {
      type: String,
      trim: true,
      required: true,
    },
   
    productDetails: {
      type: String,
      required: true,
    },
    reasons: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
      
    },
    email: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: 'Pending',
    }
  },
  { timestamps: true }
)

export default mongoose.model('Donation', donationSchema)