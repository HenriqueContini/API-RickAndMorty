import { Application, Request, Response } from "express";
import characterRoute from "./characterRoute";
import locationRoute from "./locationRoute";

const routes = (app: Application) => {
  app.use(characterRoute, locationRoute);

  app.get("/", (req: Request, res: Response) => {
    res.send("Olá mundo");
  });
};

export default routes;
