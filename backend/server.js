const express = require("express")

const app = express();

app.get("/api/hello", (req, res) =>{
    res.send('hello from the backend!')
})

const port = 5000;

app.listen(port, () =>{
    console.log(`server is running on your port ${port}`)
})