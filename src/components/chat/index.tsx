import React, { useCallback, useEffect, useRef, useState } from 'react';
import { chatService } from '@application/chat/ChatService';
import { MessageLeft, MessageRight } from './Message';
import ChatInput from '@components/input/ChatInput';
import { Box } from '@mui/material';
import messageAdaptor, { Message } from '@application/chat/Adaptor';

const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const addMessage = (m: Message) => {
    setMessages(prev => prev.concat(m));
  };

  const handleSendMessage = useCallback(async (m: string) => {
    const message = messageAdaptor.fromText(m);

    chatService.sendChat(message);

    addMessage(message);
  }, []);

  useEffect(() => {
    /**
     * @desc
     *   react strictmode 설정 시 hook이 2번 실행되는 문제가 있습니다.
     *   (다른 api 네트워크 요청도 2번 씩 발생)
     *
     *   socket client 연결 문제로 strictmode 해제하였습니다.
     */
    chatService.addListener(addMessage);
    (async () => setMessages(await chatService.getChatLog()))();

    return () => chatService.clear();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  /**
   * @desc
   *   index key 는 권장하지 않지만,
   *   element 순서가 바뀌진 않으므로 사용한다.
   */
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      pb={4}
      width={1}
      height={'100%'}
      justifyContent={'space-between'}
    >
      <Box ref={scrollRef} overflow={'auto'} px={1} pb={8}>
        {messages?.map((message, idx) =>
          message.direction === 'BOT' ? (
            <MessageLeft key={idx} {...message} />
          ) : (
            <MessageRight key={idx} {...message} />
          ),
        )}
      </Box>
      <ChatInput handler={handleSendMessage} />
    </Box>
  );
};

export default ChatContainer;
