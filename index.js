const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser'); 

// Route
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login",(req,res) =>{
    console.log({requestFromOutside:req.body})

    res.send('login berhasil')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
