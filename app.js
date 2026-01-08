// importing (exprees,mongoose,listing models(local),path)
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");

const listings=require("./routes/listing.js")
const reviews=require("./routes/review.js")

// mongo url
const MONGO_URL = "mongodb://127.0.0.1:27017/StayScape";

//connection to DB
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

//setting view engine and views folder path
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());


// root route
app.get("/", (req, res) => {
  res.redirect("/listings");
});

//listings routes
app.use("/listings",listings)
//reviews routes
app.use("/listings/:id/reviews",reviews)


//custom error
app.all("/*path", (req, res, next) => {
  next(new ExpressError(404, "page not found!"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "something went wrong!" } = err;
  res.status(statusCode).render("error.ejs", { message });
});

//server start
app.listen(8080, (req, res) => {
  console.log("server started at port 8080");
});
