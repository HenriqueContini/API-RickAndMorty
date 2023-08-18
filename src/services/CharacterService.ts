import httpClient from "../infra/httpClient";
import Character, { Gender } from "../types/character";
import InfoResponse from "../types/infoResponse";

export default class CharacterService {
  static async getAll(): Promise<{
    info: InfoResponse;
    characters: Character[];
  }> {
    try {
      const response = await httpClient.get("/character");

      const info: InfoResponse = response.data.info;
      const rawCharacters: Character[] = response.data.results;

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
        info,
        characters,
      };
    } catch (error) {
      console.log(error);
      throw new Error("Ocorreu um erro ao tentar pegar os dados!");
    }
  }
}
