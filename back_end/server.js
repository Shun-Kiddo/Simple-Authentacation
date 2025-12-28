const express = require("express");
const cors = require("cors");
const app = express();

app.use("/",(req,res) => {
    res.send("Pakyouuu");
});

app.listen(process.env.PORT || 5500, 
    console.log(`Server is running on port ${process.env.PORT|| 5500}`)
);