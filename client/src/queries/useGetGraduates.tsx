import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../constants/api";
import { IGraduate } from "../types/graduate";

export const useGetGraduates = () => {
  return useQuery<IGraduate[]>({
    queryKey: ["graduates"],
    queryFn: async () => {
      const { data: graduates } = await axios.get(API_URL + "/graduates");
      return [...graduates].filter(
        (graduate: IGraduate) => graduate.user_name !== "cypress"
      );
    },
  });
};
