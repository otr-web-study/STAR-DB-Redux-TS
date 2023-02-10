export interface Person {
  id: string,
  name: string,
  gender: string,
  birthYear: string,
  eyeColor: string,
}

export interface ApiPerson extends Exclude<Person, 'id' | 'birthYear' | 'eyeColor'> {
  url: string,
  birth_year: string,
  eye_color: string,
}