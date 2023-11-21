import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IGroup } from '../types/group';

export const useGetGroups = () => {
  return useQuery<IGroup[]>({queryKey: ['groups'], queryFn: async () => {
    const { data } = await axios.get('https://run.mocky.io/v3/2fc28a60-52a7-4799-ba0e-7e7b8fde0f1d');
    return data;
  }});
}