const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const auth = require("./middleware/auth");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(auth);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/posts", require("./routes/posts"));
app.use("/api/notifications", require("./routes/notifications"));

app.get("/", (req, res) => {
  res.send("Hello, Pro-Network!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
