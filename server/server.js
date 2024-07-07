import express from 'express'
import cors from 'cors'; 
import mongoose from 'mongoose';

const app = express()
app.use(cors()); 
app.use(express.json()); 

// mongoose.connect("mongodb+srv://omhari1472:<password>@cluster0.f1fccls.mongodb.net/")

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke 💩')
})

app.listen(4000, () => {
  console.log('Server is running on port 4000')
})