import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../constants/api";
import { IExercise } from "../types/exercise";

export const useGetExercises = () => {
  return useQuery<IExercise[]>({
    queryKey: ["exercises"],
    queryFn: async () => {
      const { data } = await axios.get(API_URL + "/exercises");
      return data;
    },
  });
};
