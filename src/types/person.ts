export interface Person {
  id: string,
  image: string,
  name: string,
  gender: string,
  birthYear: string,
  eyeColor: string,
}

export interface ApiPerson extends Omit<Person, 'id' | 'image' | 'birthYear' | 'eyeColor'> {
  url: string,
  birth_year: string,
  eye_color: string,
}