import type { NextPage } from "next";
import Layout from "../../components/layout";
import type { IChat } from "../chat";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { useEffect, useState } from "react";
import moment from "moment";
import MultiSeries from "../../components/charts/multiseries";

interface IUserDate {
  name: string;
  email: string;
  chats: IChat;
  AIDisplayMessage: string;
}

interface ICalender {
  date: string;
  chatLog: IChat;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AIDisplay = styled.div``;

const Character = styled.div``;

const Bubble = styled.div``;

const CalenderContainer = styled.div`
  .react-calendar__navigation button {
    color: #6f48eb;
    min-width: 44px;
    background: none;
    font-size: 16px;
    margin-top: 8px;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #f8f8fa;
  }
  .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
  }
  abbr[title] {
    text-decoration: none;
  }
  /* .react-calendar__month-view__days__day--weekend {
 color: #d10000;
} */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: #f8f8fa;
    color: #6f48eb;
    border-radius: 6px;
  }
  .react-calendar__tile--now {
    background: #6f48eb33;
    border-radius: 6px;
    font-weight: bold;
    color: #6f48eb;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #6f48eb33;
    border-radius: 6px;
    font-weight: bold;
    color: #6f48eb;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #f8f8fa;
  }
  .react-calendar__tile--active {
    background: #6f48eb;
    border-radius: 6px;
    font-weight: bold;
    color: white;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #6f48eb;
    color: white;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #f8f8fa;
  }
  .react-calendar__tile--range {
    background: #f8f8fa;
    color: #6f48eb;
    border-radius: 0;
  }
  .react-calendar__tile--rangeStart {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    background: #6f48eb;
    color: white;
  }
  .react-calendar__tile--rangeEnd {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background: #6f48eb;
    color: white;
  }
`;

const ChartWrapper = styled.div``;
const CalenderPage: NextPage = () => {
  const [value, setDate] = useState(new Date());
  // SSR을 위한 state와 useEffect
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);
  return (
    <Layout back title="캘린더" quickMenu>
      <Wrapper className="flex flex-col pt-2 space-y-6">
        <AIDisplay className="flex w-full justify-between px-36">
          <Character className="w-24 h-24 rounded-full bg-slate-600" />
          <Bubble className="my-auto border-2 rounded-md p-4 border-gray-300">
            Hello!
          </Bubble>
        </AIDisplay>
        <CalenderContainer className="flex flex-col items-center w-full space-y-2 px-16">
          {visible ? (
            <Calendar
              formatDay={(locale, date) => moment(date).format("DD")}
              onChange={setDate}
              value={value}
              minDetail="month"
              maxDetail="month"
              className="mx-auto w-full text-sm border-b rounded-md shadow-xl"
            />
          ) : null}

          <span className="text-gray-400 self-start mx-6">
            {value.toDateString()}
          </span>
        </CalenderContainer>
        <ChartWrapper className="flex flex-col items-center w-96 px-4">
          <span className="self-start "> (NAME)님 감정 분석</span>
          <div className="-mt-6">
            <MultiSeries />
          </div>
        </ChartWrapper>
      </Wrapper>
    </Layout>
  );
};

export default CalenderPage;
