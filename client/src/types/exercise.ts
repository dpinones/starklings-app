export interface IExercise {
  id: string
  name: string
  path: string
  mode: 'run' | 'test'
  exercise_group?: string
  exercise_order?: number
  code?: string
  description?: string
  prev_exercise?: string
  next_exercise?: string
}