import express from 'express'
import { bookAppointment, cancelAppointment, getProfile, listAppointment, loginUser, paymentRazorpay, resisterUser, updateProfile, verifyRazorpay } from '../controller/userController.js'
import authUser from '../middleware/authUser.js'
import upload from './../middleware/multer.js';

const userRouter = express.Router()

userRouter.post('/register',resisterUser)
userRouter.post('/login',loginUser)
userRouter.get('/get-profile',authUser,getProfile)
userRouter.post('/update-profile',upload.single('image'),authUser,updateProfile)
userRouter.post('/book-appointment',authUser,bookAppointment)
userRouter.get('/appointments',authUser,listAppointment)
userRouter.post("/cancel-appointent",authUser,cancelAppointment)
userRouter.post("/payment-razorpay",authUser,paymentRazorpay)
userRouter.post('/verifyRazorpay',authUser,verifyRazorpay)

export default userRouter