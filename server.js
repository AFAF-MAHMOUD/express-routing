const express = require("express")
const app = express()


app.use(Dates = (req, res, next) => {
    const date = new Date();
    const hour = date.getHours();
    if (hour >= 12 && hour <= 17) {

        app.use(express.static(__dirname + "/html"))
    } else res.send ("arja3 ghodwa")
    next()
})


app.listen(3001, (err) => {
    if (err) console.log("server not running");
    else console.log("server running on port 3000");
})


