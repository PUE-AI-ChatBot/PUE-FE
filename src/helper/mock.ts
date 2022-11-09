import { StatisticsResult } from '@components/charts/option/Series';

import { DayEmotion } from '@components/diary/emotion/DayEmotion';

export const MOCK_STATISTICS: StatisticsResult = {
  total: 3,
  statistics: {
    불만: 2,
    중립: 0,
    당혹: 5,
    기쁨: 0,
    걱정: 0,
    질투: 2,
    슬픔: 0,
    죄책감: 0,
  },
};

const MOCK_EMOJI = [
  '불만',
  '중립',
  '중립',
  '당혹',
  null,
  '걱정',
  '걱정',
  null,
  '기쁨',
  '걱정',
  null,
  '걱정',
  '기쁨',
  null,
  '기쁨',
  null,
  '기쁨',
  '슬픔',
  '슬픔',
  '슬픔',
];
export function getMonthEmotion() {
  const MOCK_EMOTION: DayEmotion[] = [];
  for (let i = 0; i < 30; i++) {
    let MOCK_EMOTION_DAY: DayEmotion = {
      chatDay: new Date(new Date().setDate(new Date().getDate() - i))
        .toISOString()
        .substring(0, 10),
      emotion: MOCK_EMOJI[i % MOCK_EMOJI.length],
    };
    MOCK_EMOTION.push(MOCK_EMOTION_DAY);
  }
  return MOCK_EMOTION;
}
