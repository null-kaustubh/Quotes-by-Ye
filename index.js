import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//static files
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", async(req, res)=>{
    const content = await axios.get("https://api.kanye.rest");
    res.render("index.ejs", {
        quote: content.data.quote,
    });
})

app.get("/liked-quotes", (req, res)=>{
    res.render("liked-quotes.ejs");
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})