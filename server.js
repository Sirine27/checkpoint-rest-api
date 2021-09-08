const express = require("express")
require("dotenv").config()
const connectDB=require("./config/connectDB")
connectDB()
const app =express();
app.use(express.json())
app.use("/api/user",require("./routes/User"))


const PORT = process.env.PORT || 6000;

app.listen(PORT,(err)=>{
    err? console.error(err) : console.log(`server is ruuning in PORT ${PORT}`)
})


