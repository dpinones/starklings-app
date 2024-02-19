import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../constants/api";
import { getUser } from "../utils/getUser";

const headers = {
  "Content-Type": "text/plain",
};

export const useBuildCairo = () => {
  return useCompileCairo("build");
};
export const useTestCairo = () => {
  return useCompileCairo("test");
};

export const useCompileCairo = (mode: "build" | "test") => {
  const user = getUser()
  return useMutation({
    mutationFn: (code: string) => {
      return axios.post(`${API_URL}/scarb/${mode}/${user}`, code, {
        headers,
      });
    },
  });
};
