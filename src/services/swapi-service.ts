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
type LocalType = Planet | Person | Starship | Vehicle;
type ServiceMultipleResponse<T extends ApiType> = { results: T[], next: string, previous: string };
type SwapiServiceResponse = ApiType | ServiceMultipleResponse<ApiType>;
export type MultipleResponse<T extends LocalType> = {
  items: T[], next: boolean, previous: boolean, page: string
};

export class SwapiService {
  constructor(
    private readonly _apiBase = 'https://swapi.dev/api',
    private readonly _imageBase = 'https://starwars-visualguide.com/assets/img'
  ) {}
  
  
  async getResource<T extends SwapiServiceResponse>(url: string): Promise<T> {
    let finalUrl = url;
    if (!finalUrl.includes('http')) {
      finalUrl = `${this._apiBase}${url}`;
    }

    const res = await fetch(finalUrl);
    const body = await res.json();
    if (! res.ok) {
      throw new Error(`Couldn't fetch ${url}, received ${res.status}`);
    }
    return body;
  }

  async getMultipleResource<T extends ApiType>(url: string): Promise<T[]> {
    let curUrl = url;
    let allItems: T[] = [];
    while (curUrl) {
      const response = this.getResource<ServiceMultipleResponse<T>>(curUrl);
      allItems = [...allItems, ...(await response).results];
      curUrl = (await response).next;
    }
    return allItems;
  }

  getPeople = async (page: string): Promise<MultipleResponse<Person>> => {
    const res = await this.getResource<ServiceMultipleResponse<ApiPerson>>(`/people/?page=${page}`);
    return this._convertMultipleResponse<ApiPerson, Person>(res, page, this._transformPerson);
  }

  getPerson = async (id: string): Promise<Person> => {
    const person: ApiPerson = await this.getResource<ApiPerson>(`/people/${id}/`);
    return this._transformPerson(person);
  }

  getPlanets = async (page: string): Promise<MultipleResponse<Planet>> => {
    const res = await this.getResource<ServiceMultipleResponse<ApiPlanet>>(`/planets/?page=${page}`);
    return this._convertMultipleResponse<ApiPlanet, Planet>(res, page, this._transformPlanet);
  }

  getPlanet = async (id: string): Promise<Planet> => {
    const planet = await this.getResource<ApiPlanet>(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }

  getStarships = async (page: string): Promise<MultipleResponse<Starship>> => {
    const res = await this.getResource<ServiceMultipleResponse<ApiStarship>>(`/starships/?page=${page}`);
    return this._convertMultipleResponse<ApiStarship, Starship>(res, page, this._transformStarship);
  }

  getStarship = async (id: string): Promise<Starship> => {
    const starship = await this.getResource<ApiStarship>(`/starships/${id}/`);
    return this._transformStarship(starship);
  }

  getVehicles = async (page: string): Promise<MultipleResponse<Vehicle>> => {
    const res = await this.getResource<ServiceMultipleResponse<ApiVehicle>>(`/vehicles/?page=${page}`);
    return this._convertMultipleResponse<ApiVehicle, Vehicle>(res, page, this._transformVehicle);
  }

  getVehicle = async (id: string): Promise<Vehicle> => {
    const vehicle: ApiVehicle = await this.getResource<ApiVehicle>(`/vehicles/${id}/`);
    return this._transformVehicle(vehicle);
  }

  getPersonImage = (id: string): string => {
    return `${this._imageBase}/characters/${id}.jpg`;
  }

  getPlanetImage = (id: string): string => {
    return `${this._imageBase}/planets/${id}.jpg`;
  }

  getStarshipImage = (id: string): string => {
    return `${this._imageBase}/starships/${id}.jpg`;
  }

  getVehicleImage = (id: string): string => {
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
    const id = this._extractId(starship);

    return {
      id,
      image: this.getStarshipImage(id),
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
    const id = this._extractId(vehicle);

    return {
      id,
      image: this.getVehicleImage(id),
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
    const id = this._extractId(person);

    return {
      id,
      image: this.getPersonImage(id),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    }
  }

  _convertMultipleResponse = <
    T extends ApiType, U extends LocalType
  >(res: ServiceMultipleResponse<T>,
    page: string,
    transform: (item: T) => U): MultipleResponse<U> => {
    return {
      next: !!res.next,
      previous: !!res.previous,
      items: res.results.map(transform),
      page: page,
    }
  } 
}

const swapiService = new SwapiService();

export default swapiService;
