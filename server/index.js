const express = require("express");
const cors = require("cors");
const authRouter = require("./route/auth.route");
const cartRouter = require("./route/cart.route");
const connection = require("./config/db");
const productRouter = require("./route/products.route");
const addressRouter = require("./route/address.route");

require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.text());

app.use("/auth", authRouter);
app.use(`/cart`, cartRouter);
app.use("/product", productRouter);
app.use("/address", addressRouter);

app.get("/", (req, res) => {
  res.send(
    "This is HomePage if its visiable to you its mean your Server app running fine..."
  );
});

app.post("/post", (req, res) => {
  res.send("got it");
});

app.listen(PORT, async () => {
  try {
    await connection;
  } catch {
    console.log("there error in connecting to mongodb");
  }
  console.log(`started at ${PORT}`);
});
