import connectDb from "./db/config";
import express from 'express'
import route from "./routes/api";
import cors from 'cors'
import cookieParser from "cookie-parser";
connectDb()
const app = express()
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use('/api', route)

app.listen(3000, () => {
    console.log("app listening to port 3000")
})
