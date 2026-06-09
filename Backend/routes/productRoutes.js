import express from 'express';
import { addProduct, removeProduct, listProduct, singleProduct } from '../controllers/productController.js';
import Upload from '../middleware/multer.js';
import AdminAuth from '../middleware/AdminAuth.js';

const productRoute = express.Router();

productRoute.post('/add', Upload.single("image"),AdminAuth,addProduct)
productRoute.get('/list',listProduct)
productRoute.post('/remove',removeProduct,AdminAuth)
productRoute.get('/single', singleProduct)

export default productRoute;


