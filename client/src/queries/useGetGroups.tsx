import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IGroup } from '../types/group';
import { API_URL } from '../constants/api';

export const useGetGroups = () => {
  return useQuery<IGroup[]>({queryKey: ['groups'], queryFn: async () => {
    const { data } = await axios.get(API_URL + '/groups');
    return data;
  }});
}