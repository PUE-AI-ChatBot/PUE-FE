import React from 'react';
const months = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
];

const days = ['일', '월', '화', '수', '목', '금', '토'];

// 월 이름 출력하기
export const monthName = (source: Date) => {
  return months[source.getMonth()];
};

// 요일 이름 출력하기
export const dayName = (source: Date) => {
  return days[source.getDay()];
};

const leftPad = (value: number) => {
  if (value >= 10) {
    return value;
  }
  return `0${value}`;
};

export const toStringByFormatting = (source: Date) => {
  const year = source.getFullYear();
  const month = leftPad(source.getMonth() + 1);
  const day = leftPad(source.getDate());
  return [year, month, day].join('.');
};
