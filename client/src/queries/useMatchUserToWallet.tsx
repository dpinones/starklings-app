import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../constants/api";
import { getUser } from "../utils/getUser";

export const useMatchUserToWallet = () => {
  const user = getUser();
  return useMutation({
    mutationFn: (wallet: string) => {
      return axios.post(`${API_URL}/user/${user}/match/${wallet}`);
    },
  });
};
