import { 
  Person, 
  ApiPerson, 
  Planet, 
  ApiPlanet, 
  Starship, 
  ApiStarship, 
  Vehicle, 
  ApiVehicle 
} from "types";

type ApiType = ApiPlanet | ApiPerson | ApiStarship | ApiVehicle;
type ServiceMultipleResponse<T extends ApiType> = { results: T[] };

export class SwapiService {
  constructor(
    private readonly _apiBase = 'https://swapi.dev/api',
    private readonly _imageBase = 'https://starwars-visualguide.com/assets/img'
  ) {}
  
  
  async getResource<T extends ApiType | ServiceMultipleResponse<ApiType>>(url: string): Promise<T> {
    const res = await fetch(`${this._apiBase}${url}`);
    const body = await res.json();
    if (! res.ok) {
      throw new Error(`Couldn't fetch ${url}, received ${res.status}`);
    }
    return body;
  }

  getAllPeople = async (): Promise<Person[]> => {
    const res = await this.getResource<ServiceMultipleResponse<ApiPerson>>('/people/');
    return res.results.map(this._transformPerson);
  }

  getPerson = async (id: string): Promise<Person> => {
    const person: ApiPerson = await this.getResource<ApiPerson>(`/people/${id}/`);
    return this._transformPerson(person);
  }

  getAllPlanets = async (): Promise<Planet[]> => {
    const res = await this.getResource<ServiceMultipleResponse<ApiPlanet>>('/planets/');
    return res.results.map(this._transformPlanet);
  }

  getPlanet = async (id: string): Promise<Planet> => {
    const planet = await this.getResource<ApiPlanet>(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }

  getAllStarships = async (): Promise<Starship[]> => {
    const res = await this.getResource<ServiceMultipleResponse<ApiStarship>>('/starships/');
    return res.results.map(this._transformStarship);
  }

  getStarship = async (id: string): Promise<Starship> => {
    const starship = await this.getResource<ApiStarship>(`/starships/${id}/`);
    return this._transformStarship(starship);
  }

  getAllVehicles = async (): Promise<Vehicle[]> => {
    const res = await this.getResource<ServiceMultipleResponse<ApiVehicle>>('/vehicles/');
    return res.results.map(this._transformVehicle);
  }

  getVehicle = async (id: string): Promise<Vehicle> => {
    const vehicle: ApiVehicle = await this.getResource<ApiVehicle>(`/vehicles/${id}/`);
    return this._transformVehicle(vehicle);
  }

  getPersonImage = ({ id }: Person): string => {
    return `${this._imageBase}/characters/${id}.jpg`;
  }

  getPlanetImage = (id: string): string => {
    return `${this._imageBase}/planets/${id}.jpg`;
  }

  getStarshipImage = ({ id }: Starship): string => {
    return `${this._imageBase}/starships/${id}.jpg`;
  }

  getVehicleImage = ({ id }: Vehicle): string => {
    return `${this._imageBase}/vehicles/${id}.jpg`;
  }

  _extractId(item: { url: string }): string {
    const idRegExp = /\/([0-9]*)\/$/;
    const res = item.url.match(idRegExp);
    if (res) {
      return res[1];
    }
    return '';
  }

  _transformPlanet = (planet: ApiPlanet): Planet => {
    const id = this._extractId(planet);

    return {
      id,
      image: this.getPlanetImage(id),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  }
  
  _transformStarship = (starship: ApiStarship): Starship => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    }
  }

  _transformVehicle = (vehicle: ApiVehicle): Vehicle => {
    return {
      id: this._extractId(vehicle),
      name: vehicle.name,
      model: vehicle.model,
      manufacturer: vehicle.manufacturer,
      costInCredits: vehicle.cost_in_credits,
      passengers: vehicle.passengers,
      length: vehicle.length,
      maxSpeed: vehicle.max_atmosphering_speed,
      vehicleClass: vehicle.vehicle_class
    }
  }

  _transformPerson = (person: ApiPerson): Person => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    }
  }
}

const swapiService = new SwapiService();

export default swapiService;
