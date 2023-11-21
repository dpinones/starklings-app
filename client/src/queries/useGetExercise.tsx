import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IExercise } from "../types/exercise";

//remove this when we have the real API
const getApiUrl = (exerciseName: string) => {
  if (exerciseName === 'intro1') return 'https://run.mocky.io/v3/c7db65b2-7953-4958-a62c-0031973717f4';
  if (exerciseName === 'intro2') return 'https://run.mocky.io/v3/0076602c-4d8c-49b1-9331-ba1e68e402ef';
  if (exerciseName === 'variables1') return 'https://run.mocky.io/v3/311ff612-77fa-4305-b7aa-6174bad01195';
  return '';
}

export const useGetExercise = (exerciseName: string) => {
  return useQuery<IExercise>({
    queryKey: ["exercise", exerciseName],
    queryFn: async () => {
      const { data } = await axios.get(getApiUrl(exerciseName) ?? '');
      return data;
    },
  });
};
