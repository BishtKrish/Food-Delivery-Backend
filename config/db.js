import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://krishnasb2005:krish2005@cluster0.fatll.mongodb.net/food-delivery').then(()=> console.log("DB Connected"));
}