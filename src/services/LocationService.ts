import getNewUrlById from "../common/getNewUrlById";
import getNextPage from "../common/getNextPage";
import getPrevPage from "../common/getPrevPage";
import httpClient from "../infra/httpClient";
import InfoResponse from "../types/infoResponse";
import Location from "../types/location";

export default class LocationService {
  static async getAll(page: number | null = null): Promise<{
    info: InfoResponse;
    locations: Location[];
  }> {
    try {
      const URL = page ? `/location/?page=${page}` : "/location";

      const response = await httpClient.get(URL);

      const rawInfo: InfoResponse = response.data.info;
      const rawLocations: Location[] = response.data.results;

      const info: InfoResponse = {
        ...rawInfo,
        next: getNextPage("/location", page, rawInfo.next),
        prev: getPrevPage("/location", page, rawInfo.prev),
      };

      const locations: Location[] = rawLocations.map(
        (location: Location): Location => {
          return {
            id: location.id,
            name: location.name,
            type: location.type,
            dimension: location.dimension,
            url: getNewUrlById("/location", location.id),
          };
        }
      );

      return {
        info: info,
        locations,
      };
    } catch (error) {
      throw new Error("Ocorreu um erro ao tentar pegar os dados!");
    }
  }
}
