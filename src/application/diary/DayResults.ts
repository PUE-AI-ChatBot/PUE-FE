import { MessageRes } from '../chat/ChatService';

export interface DayEmotion {
  chatDay: string;
  emotion: '불안' | '기쁨' | '분노' | '슬픔';
}

export interface DayLog {
  chatLog: MessageRes;
  emotionLog: DayEmotion;
}

const MOCK_EMOTION_FEAR: DayEmotion = {
  chatDay: new Date().toISOString().substring(0, 10),
  emotion: '불안',
};

const MOCK_EMOTION_DELIGHT: DayEmotion = {
  chatDay: new Date(new Date().setDate(new Date().getDate() - 1))
    .toISOString()
    .substring(0, 10),
  emotion: '기쁨',
};

const MOCK_EMOTION_DELIGHT2: DayEmotion = {
  chatDay: new Date(new Date().setDate(new Date().getDate() + 10))
    .toISOString()
    .substring(0, 10),
  emotion: '기쁨',
};

const MOCK_EMOTION_FEAR2: DayEmotion = {
  chatDay: new Date(new Date().setDate(new Date().getDate() + 12))
    .toISOString()
    .substring(0, 10),
  emotion: '불안',
};
const MOCK_EMOTION_FEAR3: DayEmotion = {
  chatDay: new Date(new Date().setDate(new Date().getDate() + 13))
    .toISOString()
    .substring(0, 10),
  emotion: '불안',
};
const MOCK_EMOTION_ANGRY: DayEmotion = {
  chatDay: new Date(new Date().setDate(new Date().getDate() + 6))
    .toISOString()
    .substring(0, 10),
  emotion: '분노',
};

const MOCK_EMOTION_SAD: DayEmotion = {
  chatDay: new Date(new Date().setDate(new Date().getDate() + 4))
    .toISOString()
    .substring(0, 10),
  emotion: '슬픔',
};
function setDayEmotion({ chatDay, emotion }: DayEmotion) {
  return null;
}
export function getDayEmotion() {
  return [
    MOCK_EMOTION_DELIGHT,
    MOCK_EMOTION_FEAR,
    MOCK_EMOTION_DELIGHT2,
    MOCK_EMOTION_FEAR2,
    MOCK_EMOTION_SAD,
    MOCK_EMOTION_ANGRY,
    MOCK_EMOTION_FEAR3,
  ];
}
