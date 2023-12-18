export interface IExercise {
  id: string
  name: string
  path: string
  mode: 'run' | 'test'
  group?: string
  order?: number
  code?: string
  description?: string
}