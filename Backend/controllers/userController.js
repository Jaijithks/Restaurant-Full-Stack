import jwt from 'jsonwebtoken';

 
const adminLogin = async (req , res) =>{

    try {
        const {email , password } = req.body

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({success:true,token, message: "admin login sucessfull"});
        }
        else{
            res.json({success: false, message:"invalid login details"})
        }
    } catch (error) {
        console.error(error)
        res.json({success: false,message: error.message})
    }
}

export default adminLogin;