enum Gender {
  male = "Male",
  female = "Female",
  gerderless = "Genderless",
  unknown = "unknown",
}

type Character = {
  id: number;
  name: string;
  species: string;
  gender: Gender;
  url: string;
};

export default Character;

export { Gender };
