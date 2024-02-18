import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../constants/api";

const headers = {
  "Content-Type": "text/plain",
};

export const useBuildCairo = (user: string) => {
  return useCompileCairo("build", user);
};
export const useTestCairo = (user: string) => {
  return useCompileCairo("test", user);
};

export const useCompileCairo = (mode: "build" | "test", user: string) => {
  return useMutation({
    mutationFn: (code: string) => {
      return axios.post(`${API_URL}/scarb/${mode}/${user}`, code, {
        headers,
      });
    },
  });
};
