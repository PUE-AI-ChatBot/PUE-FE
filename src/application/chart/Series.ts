export interface StatisticsResult {
  message?: string;
  total?: number;
  option: 'bar' | 'donut';
  statistics: {
    불안: number;
    중립: number;
    당혹: number;
    기쁨: number;
    걱정: number;
    질투: number;
    슬픔: number;
    죄책감: number;
    연민: number;
  };
}

export const seriesData = ({ option, statistics }: StatisticsResult) => {
  /**
   *     series: [
      { data: [(3 / 7) * 100, (2 / 7) * 100, (1 / 7) * 100, (1 / 7) * 100] },
    ],
   */
  const dataOption: string[] = [];
  const dataSeries: number[] = [];

  Object.entries(statistics).map(arr =>
    arr[1] > 0 ? dataOption.push(arr[0]) : null,
  );
  Object.entries(statistics).map(arr =>
    arr[1] > 0 ? dataSeries.push(arr[1]) : null,
  );
  const data = {
    option: dataOption,
    series: dataSeries,
  };

  if (option === 'donut') {
    return data;
  }
};
