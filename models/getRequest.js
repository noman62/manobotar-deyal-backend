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
    nid: {
      type: Number,
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
    status: {
      type: String,
      default: 'Pending',
    }
  },
  { timestamps: true }
)

export default mongoose.model('getRequest', getRequestSchema)