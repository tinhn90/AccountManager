const express = require("express");
const mongose = require("mongoose");
const authRouter = require("./routers/auth");
const postRouter = require("./routers/post");
require("dotenv").config();
const connnectDB = async () => {
  try {
    var user = `${process.env.DB_USERNAME}`;
    var pass = `${process.env.DB_PASSWORD}`;

    await mongose.connect(
      `mongodb+srv://${user}:${pass}@cluster0.nldv7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
    console.log("db connected");
  } catch (error) {
    console.log("Mongodb not connected" + error.message);
    process.exit(1);
  }
};
connnectDB();
const app = express();
app.use(express.json());
app.get("/", (req, res) => res.send("Hello world"));
app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);
const PORT = 5000;

app.listen(PORT, () => console.log("Server started"));
