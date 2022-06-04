//Part 1:# point 1: node-modules installed
const express = require("express");
const path = require("path");
const cors = require("cors");
//Part 1:# point 2: body parser added
const bodyParser = require("body-parser");

//Part 2:# point 6: created a static file path(views/partials/navbar.ejs) for accessing navbar insted of repeating code

const nav = [
  {
    link: "/books",
    title: "Books",
  },
  {
    link: "/authors",
    title: "Authors",
  },
  {
    link: "/addbook",
    title: "Add Book",
  },
  {
    link: "/addauthor",
    title: "Add Author",
  },
];

const loginRouter = require("./src/routes/loginroute");
const signupRouter = require("./src/routes/signuproute");
//Part 1:# point 3: home route changed to homerouter
const homeRouter = require("./src/routes/homerouter");
const booksRouter = require("./src/routes/booksroute");
const authorsRouter = require("./src/routes/authorsroute");

const app = new express();

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/home", homeRouter);
app.use("/books", booksRouter);
app.use("/authors", authorsRouter);
// Part 2:# point 7: cors added
app.use(cors());

app.get("/", function (req, res) {
  res.render("index", {});
});

app.listen(5000 || process.env.PORT, () => {
  //Part 1:# point 5: server ready on 3000 changed to 5000
  console.log("Server Ready on 5000");
});
