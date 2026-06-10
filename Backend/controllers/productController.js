import productModel from '../models/productModels.js'
import { v2 as cloudinary } from 'cloudinary'

const uploadBufferToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: 'image' },
      (error, result) => {
        if (error) return reject(error)
        resolve(result)
      }
    )
    stream.end(buffer)
  })
}

const addProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body
    let imageurl = 'https://via.placeholder.com/150'
    const image = req.file

    if (image) {
      const result = await uploadBufferToCloudinary(image.buffer)
      imageurl = result.secure_url
    }

    const productDetails = {
      name,
      price: Number(price),
      category,
      description,
      image: imageurl,
      date: Date.now(),
    }

    const product = new productModel(productDetails)
    await product.save()

    res.status(201).json({ success: true, message: 'product added successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: error.message || 'upload failed' })
  }
}

const listProduct = async (req , res ) => {
    try {
        const products = await productModel.find({})
        res.json({success:true, products})
    } catch (error) {
        console.log(error);
        res.json({success:false,message: error.message})
    }
    
}

const removeProduct = async (req, res ) => {
    try {
        await productModel.findByIdAndDelete(req.body._id)
        res.json({success:true ,  message : "product removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message})

    }
    
}
const singleProduct = async (req , res) => {
    
}

export {addProduct,listProduct,removeProduct,singleProduct}