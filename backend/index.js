import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import useRoute from './routes/user.route.js'

const app = express()
dotenv.config();

app.use(express.json())

const PORT =process.env.PORT || 5001;
const URL = process.env.MONGODB_URL;

try{
mongoose.connect( URL);
console.log("MongoDB Connected");

}catch(error){
  console.log(error);
}


app.use("/user",useRoute);

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`)
})