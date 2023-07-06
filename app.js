const express = require("express")
const PORT = process.env.PORT || 5000
const app = express()

app.get("/", (req, res) => {
     res.send("It is working MTHFCKR")
})

app.get("/genrofer", (req, res) => {
     res.send("This is Genrofer")
})

app.listen(PORT, () => {
     console.log(`Server started on ${PORT}`)
})