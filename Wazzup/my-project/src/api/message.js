import { instance } from '.';

const newMessage = async (receiverId, content) => {
  const response = await instance.post(`/message/${receiverId}`, {
    content,
  });

  return response.data;
};

export { newMessage };
