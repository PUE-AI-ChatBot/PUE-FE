import React, { useCallback, useEffect, useRef, useState } from 'react';
import { chatService, MessageRes } from '../../application/chat/ChatService';
import { MessageLeft, MessageRight } from './Message';
import ChatInput from '../input/ChatInput';
import { Box } from '@mui/material';

type IChat = {};
const ChatContainer = ({}: IChat) => {
  const [messages, setMessages] = useState<MessageRes[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const addMessage = (m: MessageRes) => setMessages(prev => prev.concat(m));

  const handleSendMessage = useCallback(async (message: string) => {
    /**
     * @todo
     *   select type MessageRes? Chat?
     */
    const {
      properties: { message: text, date, userId },
    } = await chatService.sendChat(message);

    addMessage({ text, user: { name: 'sohee', photo: '' } });
  }, []);

  useEffect(() => {
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
      px={4}
      pb={4}
      height={'100%'}
      justifyContent={'space-between'}
    >
      <Box ref={scrollRef} overflow={'auto'} px={4} pb={8}>
        {messages.map((message, idx) =>
          message.user.name === 'PUE' ? (
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
