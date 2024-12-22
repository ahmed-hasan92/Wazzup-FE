import { useQuery } from '@tanstack/react-query';
import { getAllProfiles, getMyProfile } from '../api/profile';

const useProfile = () => {
  const { data: myProfile, isLoading } = useQuery({
    queryKey: ['MY_PROFILE'],
    queryFn: () => getMyProfile(),
  });

  const { data: allProfiles } = useQuery({
    queryKey: ['ALL_PROFILES'],
    queryFn: () => getAllProfiles(),
  });

  return { myProfile, allProfiles, isLoading };
};

export default useProfile;
