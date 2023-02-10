export interface Starship {
  id: string,
  name: string,
  model: string,
  manufacturer: string,
  costInCredits: string,
  length: string,
  crew: string,
  passengers: string,
  cargoCapacity: string,
}

export interface ApiStarship extends Exclude<Starship, 'id' | 'costInCredits' | 'cargoCapacity'> {
  url: string,
  cost_in_credits: string,
  cargo_capacity: string,
}