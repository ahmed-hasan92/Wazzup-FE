import { instance } from '.';

const addToContacts = async (userId) => {
  const response = await instance.put(`/contacts/${userId}`);
  return response.data;
};

export { addToContacts };
