import { instance } from '.';

const addToContacts = async (userId) => {
  const response = await instance.put(`/contacts/${userId}`);
  return response.data;
};

const removeFromContacts = async (userId) => {
  const response = await instance.put(`/contacts/remove/${userId}`);
  return response.data;
};

const getMyContacts = async () => {
  const response = await instance.get('/contacts');
  return response.data;
};

export { addToContacts, removeFromContacts, getMyContacts };
