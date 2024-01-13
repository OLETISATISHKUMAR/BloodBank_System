const express = require("express")
const app = express()
const authRouter = require("./routes/auth.router")
const cors = require("cors")
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("tiny"))
app.use("/", authRouter)

module.exports = app
