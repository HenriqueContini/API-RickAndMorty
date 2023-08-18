import { Application, Request, Response } from "express";
import characterRoute from "./characterRoute";

const routes = (app: Application) => {
  app.use(characterRoute);

  app.get("/", (req: Request, res: Response) => {
    res.send("Olá mundo");
  });
};

export default routes;
