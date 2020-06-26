const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://workoutT:pass1234@ds217438.mlab.com:17438/heroku_7lw27x3h", { useNewUrlParser: true });

app.use(require("./routes/html"));
app.use(require("./routes/api"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});