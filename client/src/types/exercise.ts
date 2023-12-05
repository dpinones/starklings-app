export interface IExercise {
  id: string
  name: string
  path: string
  mode: string
  group?: string
  order?: number
  code?: string
  description?: string
}