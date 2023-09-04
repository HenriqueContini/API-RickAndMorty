import { Router } from "express";
import LocationController from "../controllers/LocationController";

const locationRoute = Router();

locationRoute.route("/location").get(LocationController.getAll);

export default locationRoute;
