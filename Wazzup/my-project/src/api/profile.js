import { instance } from '.';

const getMyProfile = async () => {
  const response = await instance.get('/profile/myProfile');
  return response.data;
};

const getAllProfiles = async () => {
  const response = await instance.get('/profile/allProfiles');
  return response.data;
};

export { getMyProfile, getAllProfiles };
