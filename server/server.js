const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;
mongoose.connect(URL);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to MongoDB!");
});

const WeatherforcastAndCultivationRouter = require("./routes/Weatherforcast.js");
const CulivationRouter = require("./routes/Cultivation.js");

app.use("/Weatherforcast", WeatherforcastAndCultivationRouter);
app.use("/Cultivation", CulivationRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
