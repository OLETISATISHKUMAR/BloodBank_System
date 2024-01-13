const app = require("./app")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
dotenv.config()
const PORT = process.env.PORT || 8080

// DATEBASE CONNECTION.
connectDB()

app.listen(PORT, ()=>{
    console.log(`Server is Running at port ${PORT}`)
})
