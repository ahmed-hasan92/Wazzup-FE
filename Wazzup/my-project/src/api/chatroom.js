import { instance } from '.';

const getMyChatrooms = async () => {
  const response = await instance.get('/chatroom');
  return response.data;
};

const getOneChatroom = async (chatroomId) => {
  const response = await instance.get(`/chatroom/${chatroomId}`);
  return response.data;
};

const checkOrCreateChatroom = async (otherParticipantId) => {
  const response = await instance.post(`/chatroom/${otherParticipantId}`);
  return response.data;
};

export { getMyChatrooms, checkOrCreateChatroom, getOneChatroom };
