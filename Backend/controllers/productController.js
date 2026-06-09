import productModel from "../models/productModels.js"
import multer from "multer"
import {v2 as cloudinary} from 'cloudinary'



const addProduct = async (req , res) => {
try {
    const {name,price,description,category} = req.body
    let imageurl =""
    const image = req.file;
    if(image){
        let result = await cloudinary.uploader.upload(image.path, {resource_type : 'image'})
        imageurl = result.secure_url
    }else{
        imageurl = "https://via.placeholder.com/150"
    }
    const productDetails = {
        name , price: Number(price), category , description, image: imageurl, date : Date.now()
    }
    console.log(productDetails);

    const product = new productModel(productDetails)
    await product.save()

    res.json({success: true, message: "product added successfully"})
} catch (error) {
    console.log(error);
    res.json({success: true , message : "upload failed"})
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