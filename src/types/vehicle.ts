export interface Vehicle {
  id: string,
  name: string,
  model: string,
  manufacturer: string,
  costInCredits: string,
  passengers: string,
  length: string,
  maxSpeed: string,
  vehicleClass: string,
}

export interface ApiVehicle extends Exclude<
  Vehicle, 
  'id' | 'costInCredits' | 'maxSpeed' | 'vehicleClass'
> {
  url: string,
  cost_in_credits: string,
  max_atmosphering_speed: string,
  vehicle_class: string,
}