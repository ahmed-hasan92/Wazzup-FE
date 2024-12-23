import { useMutation, useQueryClient } from '@tanstack/react-query';

import { newMessage } from '../api/message';
import toast from 'react-hot-toast';

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

  return { sendMessage };
};

export default useMessage;
