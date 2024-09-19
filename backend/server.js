import express from "express";

const app = express();

app.listen(3000, () => {
  console.log(`Server Running On Port 3000`);
});

app.get("/", (req, res) => {
  res.send("Hello Nabiel");
});
