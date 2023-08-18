import express, { Application } from "express";
import routes from "./routes/routes";

const app: Application = express();
const PORT: number = 3000;

routes(app);

app.listen(PORT, () => {
  console.log(`Running on: http://localhost:${PORT}`);
});
