import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../constants/api";
import { IExercise } from "../types/exercise";

export const useGetExercise = (exerciseName: string | undefined) => {
  return useQuery<IExercise>({
    queryKey: ["exercises", exerciseName],
    enabled: !!exerciseName,
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/exercises/${exerciseName}`);
      if (data.description) {
        data.description = data.description.replaceAll("//", "").replace(/\n/g, "\n\n");
      }
      return data;
    },
  });
};
