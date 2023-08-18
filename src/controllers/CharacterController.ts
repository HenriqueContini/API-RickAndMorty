import { Request, Response } from "express";
import ApiResponse from "../types/apiResponse";
import Character from "../types/character";
import CharacterService from "../services/CharacterService";
import errorResponse from "../infra/errorResponse";

export default class CharacterController {
  static async getAll(req: Request, res: Response<ApiResponse<Character[]>>) {
    try {
      const data = await CharacterService.getAll();

      return res.status(200).json({
        error: false,
        info: data.info,
        data: data.characters,
      });
    } catch (error: unknown) {
      errorResponse(res, 500, "Ocorreu um erro interno", error);
    }
  }
}
