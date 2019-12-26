const express = require("express")
const app = express()
const date = new Date();
const hour= date.getHours();
console.log(hour)
if(hour>=8 && hour<=17){
app.use(express.static(__dirname +"/html"))
}else console.log("arja3 ghodwa")

app.listen(3000, (err) => {
    if (err) console.log("server not running");
    else console.log("server running on port 3000");
})


