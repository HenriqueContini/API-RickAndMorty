import getNextPage from "../common/getNextPage";
import getPrevPage from "../common/getPrevPage";
import httpClient from "../infra/httpClient";
import Character, { Gender } from "../types/character";
import InfoResponse from "../types/infoResponse";

export default class CharacterService {
  static async getAll(page: number | null = null): Promise<{
    info: InfoResponse;
    characters: Character[];
  }> {
    try {
      const URL = page ? `/character/?page=${page}` : `/character`;

      const response = await httpClient.get(URL);

      const rawInfo: InfoResponse = response.data.info;
      const rawCharacters: Character[] = response.data.results;

      const info: InfoResponse = {
        ...rawInfo,
        next: getNextPage("/character", page, rawInfo.next),
        prev: getPrevPage("/character", page, rawInfo.prev),
      };

      const characters: Character[] = rawCharacters.map(
        (character: Character): Character => {
          return {
            id: character.id,
            name: character.name,
            species: character.species,
            gender: character.gender,
            url: character.url,
          };
        }
      );

      return {
        info: info,
        characters,
      };
    } catch (error) {
      console.log(error);
      throw new Error("Ocorreu um erro ao tentar pegar os dados!");
    }
  }
}
