import express from "express";
import { getAllreservation , createReservstion , deleteReservation } from "../controllers/reservationControllers.js";

const reservationRoute = express.Router();

reservationRoute.post('/create', createReservstion) 
reservationRoute.get('/view', getAllreservation) 
reservationRoute.post('/delete/:id', deleteReservation) 

export default reservationRoute;