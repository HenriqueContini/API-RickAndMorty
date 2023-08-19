import { Request, Response } from "express";
import ApiResponse from "../types/apiResponse";
import Character from "../types/character";
import CharacterService from "../services/CharacterService";
import errorResponse from "../infra/errorResponse";

export default class CharacterController {
  static async getAll(req: Request, res: Response<ApiResponse<Character[]>>) {
    try {
      let pageParam = req.query.page;

      if (pageParam === undefined) {
        const data = await CharacterService.getAll();

        return res.status(200).json({
          error: false,
          info: data.info,
          data: data.characters,
        });
      }

      if (isNaN(Number(pageParam))) {
        throw new Error("Page precisa ser um número!");
      }

      const data = await CharacterService.getAll(Number(pageParam));

      return res.status(200).json({
        error: false,
        info: data.info,
        data: data.characters,
      });
    } catch (error: unknown) {
      console.log(error);
      errorResponse(res, 500, "Ocorreu um erro interno", error);
    }
  }
}
