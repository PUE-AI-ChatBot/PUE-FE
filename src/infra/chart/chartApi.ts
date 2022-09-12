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

export function fetchStat1Day() {
  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/stat/day/20220910`).then(
    response => response.json(),
  );
}
export const getStaticsDay = async ({
  mode,
  oneDay,
  Nday,
  setDate,
}: StatisticsDay) => {
  if (mode === '1day') {
    return HttpClient.get(`stat/day/${oneDay}`);
  } else if (mode === 'allday') {
    return HttpClient.get(`stat/${mode}`);
  } else if (mode === 'Nday') {
    return HttpClient.get(`stat/latest/${Nday?.oneDay}/before/${Nday?.N}`);
  } else {
    // chats?
    return HttpClient.get(`stat/latest/${setDate?.start}/from/${setDate?.end}`);
  }
};
