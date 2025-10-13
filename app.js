import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import {uploadMiddleware, uploadImage } from "./controllers/ImageController.js"    

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err))

app.post("/upload", uploadMiddleware, uploadImage)

app.get("/", (req,res) => {
    res.send("Image upload API running")
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server is running at port http://localhost:${PORT}`)
})