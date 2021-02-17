// require dependencies

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// home route

app.get("/", (req, res) => {
	res.render("pages/home");
});

app.listen(3000, () => {
	console.log(`Server started at port 3000`);
});
