import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Olá mundo");
});

app.listen(PORT, () => {
  console.log(`Running on: http://localhost:${PORT}`);
});
