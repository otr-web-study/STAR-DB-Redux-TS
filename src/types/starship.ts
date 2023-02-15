export interface Starship {
  id: string,
  image: string,
  name: string,
  model: string,
  manufacturer: string,
  costInCredits: string,
  length: string,
  crew: string,
  passengers: string,
  cargoCapacity: string,
}

export interface ApiStarship extends Omit<Starship, 'id' | 'image' | 'costInCredits' | 'cargoCapacity'> {
  url: string,
  cost_in_credits: string,
  cargo_capacity: string,
}