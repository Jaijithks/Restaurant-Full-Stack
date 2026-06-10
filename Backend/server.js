import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import dns from 'dns';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js';
import productRoute from './routes/productRoutes.js';
import reservationRoute from './routes/reseravationRoutes.js';

dns.setServers(["1.1.1.1","8.8.8.8"])

const app = express();

const port = process.env.PORT || 4000

connectDB().catch(err => {
  console.error('Database connection failed:', err.message)
})

connectCloudinary().catch(err =>{
    console.error('cloudinary connection failed', err.message)
})

app.use(cors())
app.use(express.json())

app.use('/api/user', userRouter)
app.use('/api/product', productRoute)
app.use('/api/reservation', reservationRoute)

app.get('/',(req,res) =>{
    res.send("API wroking")
})

app.listen(port , ()=>{
    console.log(`server running at port : ${port}`)
})