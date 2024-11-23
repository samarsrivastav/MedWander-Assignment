import connectDb from "./db/config";
import express from 'express'
import route from "./routes/route";
connectDb()
const app=express()
app.use(express.json())
app.use('/api',route)
app.listen(3000,()=>{
    console.log("app listening to portt 3000")
})
