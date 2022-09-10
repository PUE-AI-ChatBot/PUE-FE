export interface StatisticsResult {
  message?: string;
  total?: number;
  option: 'bar' | 'donut';
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

export const seriesData = ({ option, statistics }: StatisticsResult) => {
  /**
   *     series: [
      { data: [(3 / 7) * 100, (2 / 7) * 100, (1 / 7) * 100, (1 / 7) * 100] },
    ],
   */
  if (option === 'donut') {
    return Object.values(statistics);
  }
};
