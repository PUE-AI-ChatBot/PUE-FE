import type { NextPage } from "next";
import Layout from "../../components/layout";
import type { IChat } from "../chat";
import Button from "@mui/material/Button";
import styled from "styled-components";

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

const AIDisplay = styled.div`
  
`;

const Character = styled.div``;

const Bubble = styled.div``;

const CalenderContainer = styled.div`
`;
const Calender: NextPage = () => {
  return (
    <Layout back title="캘린더" quickMenu>
      <Wrapper className="pt-6 space-y-10">
        <AIDisplay className="flex w-full justify-between px-36">
          <Character className="w-24 h-24 rounded-full bg-slate-600"/>
          <Bubble className="my-auto border-2 rounded-md p-4 border-gray-300"> Hello! </Bubble>
        </AIDisplay>
      <h1> I'm Calender </h1>
      <Button variant="contained"> Hello! </Button>
      </Wrapper>

    </Layout>
  );
};

export default Calender;
