import HttpClient from '@infra/client/HttpClient';

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

export const getStaticsDay = async ({
  mode,
  oneDay,
  Nday,
  setDate,
}: StatisticsDay) => {
  if (mode === '1day') {
    return HttpClient.get(`//stat/day/${oneDay}`);
  } else if (mode === 'allday') {
    return HttpClient.get(`//stat/${mode}`);
  } else if (mode === 'Nday') {
    return HttpClient.get(`//stat/latest/${Nday?.oneDay}/before/${Nday?.N}`);
  } else {
    // chats?
    return HttpClient.get(
      `//chats/latest/${setDate?.start}/from/${setDate?.end}`,
    );
  }
};
