import { getMonthEmotion } from '@helper/mock';

export interface StatisticsResult {
  message?: string;
  total?: number;
  option?: 'bar' | 'donut';
  statistics: {
    불만: number;
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

export const seriesData = ({
  total,
  statistics,
  message,
}: StatisticsResult) => {
  const optionColor = {
    불만: '#dc143c',
    중립: '#ffffe0',
    당혹: '#f4a460',
    기쁨: '#00ff00',
    걱정: '#00bfff',
    질투: '#800000',
    슬픔: '#191970',
    죄책감: '#4b0082',
    연민: '#808080',
  };

  const dataOption: string[] = [];
  const dataSeries: number[] = [];
  const dataColor: string[] = [];
  Object.entries(statistics).map(arr =>
    arr[1] > 0 ? dataOption.push(arr[0]) : null,
  );
  Object.entries(statistics).map(arr =>
    arr[1] > 0 ? dataSeries.push(arr[1]) : null,
  );
  dataOption.map(opt =>
    Object.entries(optionColor).map(([key, val]) =>
      key === opt ? dataColor.push(val) : null,
    ),
  );
  const data = {
    option: dataOption,
    series: dataSeries,
    color: dataColor,
  };

  return data;
};
