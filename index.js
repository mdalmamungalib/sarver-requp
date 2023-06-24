const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;
const product = require("./product.json");

app.get("/allProduct", (req, res) => {
  res.send(product);
});

app.get("/product/:id", (req, res) => {
  const id = req.params.id;
  const getSingleItem = product?.find((p) => p.id == id);
  if (!getSingleItem) {
    res.send("khuja pai nay");
  }
  res.send(getSingleItem);
});

app.get("/products/:category", (req, res) => {
  const category = req.params.category;
  const getSingleCategory = product?.filter((p) => p.category == category);
  if (!getSingleCategory) {
    res.send("kisu e khuja paynay ra");
  }
  res.send(getSingleCategory);
});

app.listen(Port, () => {
  console.log("Server is running the port");
});

module.exports = app;
