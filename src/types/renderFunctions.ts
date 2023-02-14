export interface RenderName {
  ({ name }: { name: string }): string
}

export interface RenderModelAndName {
  ({ name, model }: { model: string, name: string }): string
}

export interface RenderClassAndName {
  ({ name, vehicleClass }: { vehicleClass: string, name: string }): string
}