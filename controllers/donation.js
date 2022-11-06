import User from '../models/user'
import Donation from '../models/donation'

//User Donation
export const newDonation = async (req, res) => {
  try {
    const { productName, productDetails, reasons, email, imageURL } = req.body

    //validation
    if (!productName) return res.status(400).send('productName is required')
    if (!productDetails)
      return res.status(400).send('productDetails is required')
    if (!reasons) return res.status(400).send('reasons is required')
    if (!email) return res.status(400).send('email is required')
    if (!imageURL) return res.status(400).send('imageURL is required')

    let userExist = await User.findOne({ email }).exec()
    if (!userExist)
      return res
        .status(400)
        .send('you have to give the email with which you logged in')

    // Save user in database
    const setDonation = new Donation({
      productName,
      productDetails,
      reasons,
      email,
      imageURL
    })
    await setDonation.save().then(newDonation => {
      console.log('New Donation----->', newDonation)
    })

    //Send success response to front-end
    return res.json({ ok: true })
  } catch (err) {
    console.log(err)
    return res.status(400).send('Error. Try again.')
  }
}

// Get all donations
export const allDonation = async (req, res) => {
  const all = await Donation.find().exec()
  res.json(all)
}

// Get a single Donation
export const read = async (req, res) => {
  const id = req.params.donationId
  console.log(id)
  try {
    const singleDonation = await Donation.findOne({ _id: id }).exec()
    res.json(singleDonation)
    console.log(singleDonation)
  } catch (err) {
    console.log(err)
  }
}

export const specificDonation= async (req, res) => {
  const userEmail = req.query.email
  const all = await Donation
    .find({ email: { $regex: userEmail, $options: '$i' } })
    .exec()
  res.json(all)
}
export const searchDonation= async (req, res) => {

  const userDonation = req.query.productName
  const all = await Donation
    .find({ productName: { $regex: userDonation, $options: '$i' } })
    .exec()
  res.json(all)
}

export const updateStatus=async(req,res)=>{
  const id = req.params.id
  console.log(id)
  
  try {
    const doc = await Donation.findByIdAndUpdate(
      {
        _id:id,
      },
      {
        status:"success",
      },
      {
        new:true,
      }
    )
    await doc.save().then(newdoc => {
      console.log('New Doc----->', newdoc)
    })
    return res.json({ ok: true })
  } catch (err) {
    console.log(err)
  }
}

export const deleteDonation=async(req,res)=>{
  Donation.deleteOne({ _id:req.params.id })
      .then(result => {
        res.send(result.deletedCount > 0)
        console.log(result.deletedCount);
      })

  
  
}
