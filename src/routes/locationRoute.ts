import { Router } from "express";
import LocationController from "../controllers/LocationController";

const locationRoute = Router();

locationRoute.route("/location").get(LocationController.getAll);

locationRoute.route("/location/:id").get(LocationController.getById);

export default locationRoute;
