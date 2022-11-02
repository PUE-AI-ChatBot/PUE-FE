import axios from 'axios';
import useSWR from 'swr';

const URL = process.env.NEXT_PUBLIC_BASE_URL;

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export const fetchStatMonth = (month: string) => {
  const { data, error } = useSWR(`/stat/latest/${month}/before/30`, fetcher);
  return data;
};
export const fetchStatAllDay = () => {
  const { data, error } = useSWR(`${URL}/stat/allday`, fetcher);
  return data;
};

export const fetchStatDay = (date: string) => {
  const { data, error } = useSWR(`${URL}/stat/day/${date}`, fetcher);
  return data;
};
