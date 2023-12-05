import { useGetExercises } from "./useGetExercises";

export const useGetNextExerciseId = (
  currentExerciseId: string | undefined = undefined
): string => {
  const { data: exercises } = useGetExercises();
  if (!exercises) {
    return ''
  }
  if (!currentExerciseId) {
    return exercises[0].id
  }
  const currentExerciseIndex = exercises.findIndex(exercise => exercise.id === currentExerciseId)
  return currentExerciseIndex ? exercises[currentExerciseIndex + 1].id : ''
};
