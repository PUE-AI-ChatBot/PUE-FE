export interface DayEmotion {
  chatDay: string;
  emotion:
    | '불만'
    | '중립'
    | '당혹'
    | '기쁨'
    | '걱정'
    | '질투'
    | '슬픔'
    | '죄책감'
    | '분노'
    | string
    | null;
}
