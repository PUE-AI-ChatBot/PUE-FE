import HttpClient from '@infra/client/HttpClient';
import axios from 'axios';
import useSWR from 'swr';

interface StatisticsDay {
  mode: '1day' | 'allday' | 'Nday' | 'setDate';
  oneDay?: string;
  Nday?: {
    oneDay: string;
    N: number;
  };
  setDate?: {
    start: string;
    end: string;
  };
}

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export const fetchStatMonth = (month: string) => {
  const { data, error } = useSWR(`/stat/latest/${month}/before/30`, fetcher);
  return data;
};
export const fetchStatAllDay = () => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/stat/allday`,
    fetcher,
  );
  return data;
};

export const fetchStatDay = (date: string) => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/stat/day/${date}`,
    fetcher,
  );
  return data;
};
