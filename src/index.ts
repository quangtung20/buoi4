import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import routes from './routes'

dotenv.config()
const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.json())
app.use(express.urlencoded()) 

const URI:string = process.env.MONGODB_URL;
const DB_NAME:string = process.env.DB_NAME;

app.use('/api',routes);

// Start server listening
const port = process.env.PORT || 5000;

const connectDB = async ()=>{
  await mongoose.connect(URI, {
    autoIndex: false,
    dbName:DB_NAME,
  }, (err) => {
    if(err) throw err;
    console.log('Mongodb connection.');
    app.listen(port, () => {
      console.log(`Express is listening on port ${port}`)
    })
  })
}

connectDB();



