import { useMutation, useQueryClient } from '@tanstack/react-query';

import { newMessage } from '../api/message';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { socket } from '../api/socket';

const useMessage = () => {
  const query = useQueryClient();
  const { mutate: sendMessage } = useMutation({
    mutationKey: ['SEND_MESSAGE'],
    mutationFn: ({ receiverId, content }) => newMessage(receiverId, content),
    onSuccess: () => {
      query.invalidateQueries(['MY_CHATROOMS', 'ONE_ROOM']);
    },
    onError: (error) => {
      toast.error(`${error.response.data}`);
    },
  });

  useEffect(() => {
    // Listen for real-time message updates
    socket.on('receive_message', (data) => {
      const { chatroomId } = data;
      query.invalidateQueries(['ONE_ROOM', chatroomId]);
    });

    // Cleanup listener on component unmount
    return () => {
      socket.off('receive_message');
    };
  }, [query]);
  return { sendMessage };
};

export default useMessage;
