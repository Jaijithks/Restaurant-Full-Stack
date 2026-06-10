import reservationModel from "../models/reservationModel.js";



const createReservstion = async (req , res) => {
   try {
    const {name , email , phone , date , time , guests } = req.body;
    if (!name || !email | !phone || !date || !time || !guests ){
        return(res.json({success:false ,message : "add every detail"}))
    }
      else{
 const newReservation = new reservationModel({name , email , phone , date , time , guests})
 console.log("storing to mogodb")
 await newReservation.save()
 res.json({success: true , message: newReservation})
   }
   } catch (error) {
    console.log(error)
   }
 
}
const getAllreservation = async (req, res) =>{
    try {
        const reservations = await reservationModel.find({})
        res.json({success:true, message: reservations})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }

}
const deleteReservation = async ( req , res) => {
try {
    await reservationModel.findByIdAndDelete(req.params)
    res.json({success: true, message: "reservation removed"})
} catch (error) {
    console.log(error)
    res.json({success:false, message: error.message})
}
}

export {createReservstion , getAllreservation , deleteReservation};