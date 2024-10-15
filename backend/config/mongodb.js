import mongoose from "mongoose";

const connectDB = async()=>{

    mongoose.connection.on("connected",()=>console.log("database Connected"))

    await mongoose.connect(`mongodb+srv://balavengat07:naveenbala@cluster0.dvamvyw.mongodb.net/Prescripto`)

}

export default connectDB
