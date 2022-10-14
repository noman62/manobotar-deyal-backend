import getRequest from '../models/getRequest'

//User Request
export const newRequest = async (req, res) => {
  console.log(req.body)
  try {
    // Save user in database
    const setRequest = new getRequest({
      ...req.body
    })
    await setRequest.save().then(newRequest => {
      console.log('New Request----->', newRequest)
    })

    //Send success response to front-end
    return res.json({ ok: true })
  } catch (err) {
    console.log(err)
    return res.status(400).send('Error. Try again.')
  }
}

export const allRequest = async (req, res) => {
  const userEmail = req.query.email
  const all = await getRequest
    .find({ email: { $regex: userEmail, $options: '$i' } })
    .exec()
  res.json(all)
}

export const adminRequest = async (req, res) => {
  const admin = await getRequest.find().exec()
  res.json(admin)
}

export const updateStatus=async(req,res)=>{
  const id = req.params.id
  console.log(id)
  
  try {
    const doc = await getRequest.findByIdAndUpdate(
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
