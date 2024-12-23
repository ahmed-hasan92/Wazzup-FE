import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import {
  checkOrCreateChatroom,
  getMyChatrooms,
  getOneChatroom,
} from '../api/chatroom';
import ChatroomContext from '../context/ChatroomContext';
import toast from 'react-hot-toast';

const useChatroom = () => {
  const { currentChatroom, setCurrentChatroom } = useContext(ChatroomContext);
  const { data: myChatrooms, isLoading } = useQuery({
    queryKey: ['MY_CHATROOMS'],
    queryFn: () => getMyChatrooms(),
  });

  const { data: oneRoom } = useQuery({
    queryKey: ['ONE_ROOM', currentChatroom],
    queryFn: () => getOneChatroom(currentChatroom),
    enabled: !!currentChatroom,
  });

  const { mutate: checkOrCreateRoom } = useMutation({
    mutationKey: ['CHECK_OR_CREATE'],
    mutationFn: (otherParticipantId) =>
      checkOrCreateChatroom(otherParticipantId),
    onSuccess: (data) => {
      setCurrentChatroom(data.chatroomId);
    },
    onError: (error) => {
      toast.error(`${error.response.data}`);
    },
  });

  return { myChatrooms, oneRoom, checkOrCreateRoom, isLoading };
};

export default useChatroom;
