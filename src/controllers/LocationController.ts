import { Request, Response } from "express";
import LocationService from "../services/LocationService";
import ApiResponse from "../types/apiResponse";
import Location from "../types/location";
import errorResponse from "../infra/errorResponse";

export default class LocationController {
  static async getAll(req: Request, res: Response<ApiResponse<Location[]>>) {
    try {
      let pageParam = req.query.page;

      if (pageParam === undefined) {
        const data = await LocationService.getAll();

        return res.status(200).json({
          error: false,
          info: data.info,
          data: data.locations,
        });
      }

      if (isNaN(Number(pageParam))) {
        return errorResponse(res, 400, "Page precisar ser um número");
      }

      const data = await LocationService.getAll(Number(pageParam));

      return res.status(200).json({
        error: false,
        info: data.info,
        data: data.locations,
      });
    } catch (error: unknown) {
      console.log(error);
      errorResponse(res, 500, "Ocorreu um erro interno", error);
    }
  }

  static async getById(
    req: Request,
    res: Response<ApiResponse<Location | null>>
  ) {
    try {
      let id = req.params.id;

      if (isNaN(Number(id))) {
        return errorResponse(res, 400, "ID precisa ser um número");
      }

      const data = await LocationService.getById(Number(id));

      if (data) {
        return res.status(200).json({
          error: false,
          data,
        });
      }

      return errorResponse(res, 404, "Localização não encontrada");
    } catch (error: unknown) {
      console.log(error);
      errorResponse(res, 500, "Ocorreu um erro interno", error);
    }
  }
}
