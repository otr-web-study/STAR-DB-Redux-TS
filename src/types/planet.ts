export interface Planet {
  id: string,
  image: string,
  name: string,
  population: string,
  rotationPeriod: string,
  diameter: string,
}

export interface ApiPlanet extends Exclude<Planet, 'id' | 'image' | 'rotationPeriod'> {
  url: string,
  rotation_period: string,
}