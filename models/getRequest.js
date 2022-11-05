import mongoose from 'mongoose'
const { Schema } = mongoose
const { ObjectId } = Schema

const getRequestSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
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
    address: {
      type: String,
      trim: true,
      required: true,
    },
    reference: {
      type: String,
      trim: true,
      required: true,
    },
    status: {
      type: String,
      default: 'Pending',
    }
  },
  { timestamps: true }
)

export default mongoose.model('getRequest', getRequestSchema)