import type { NextPage } from 'next';
import ChatContainer from '@components/chat';
import Layout from '@components/navigation/layout';

export interface IChat {
  isUser: boolean;
  message: string;
  date: Date;
  option?: string;
  emotion?: 'Positive' | 'Negative' | 'Sad' | '';
  hasError: boolean;
}

/**
 * @desc 채팅 서비스
 *   말풍선, 선택지, 입력 UI, layout - application
 *   채팅 메세지 전달 - domain
 *   socket 통신 담당 - infra
 */

const Chat: NextPage = () => {
  return (
    <Layout hasHeaderBar backArrow profileButton>
      <ChatContainer />
    </Layout>
  );
};

export default Chat;
