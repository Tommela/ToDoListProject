import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var itemArray = [];
var itemArray2 = [];

function addItems(item) {
  itemArray.push(item)
}

function addItem2s(item) {
  itemArray2.push(item);
}

app.get("/", (req, res) => {
  res.render("index.ejs", {
    "items": itemArray2,
  });
});

app.get("/work", (req, res) => {
  res.render("work.ejs", {
    "items": itemArray,
  });
});

app.post("/submit", (req, res) => {
     addItems(req.body["newtodo"]);
     res.redirect("/work");
})

app.post("/submit2", (req, res) => {
  addItem2s(req.body["newtodo"]);
  res.redirect("/");
})

app.listen(port, (req, res) => {
  console.log(`Server is running on http://localhost:${port}`);
});
