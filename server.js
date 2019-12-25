const express = require("express")
const app = express()

app.use(express.static(__dirname +"/html"))


app.listen(3000, (err) => {
    if (err) console.log("server not running");
    else console.log("server running on port 3000");
})


