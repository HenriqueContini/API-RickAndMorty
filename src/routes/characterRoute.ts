import { Router } from "express";
import CharacterController from "../controllers/CharacterController";

const characterRoute = Router();

characterRoute.route("/character").get(CharacterController.getAll);

export default characterRoute;
